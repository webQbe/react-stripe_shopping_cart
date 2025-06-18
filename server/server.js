require('dotenv').config(); // This loads .env into process.env
const express = require('express');
var cors = require('cors')

// Read mock flag and Stripe key from env
const MOCK = process.env.MOCK_PAYMENTS === 'true';
let stripe = null;
if (!MOCK) {
    // If MOCK=false, require STRIPE_SECRET_KEY 
    if (!process.env.STRIPE_SECRET_KEY) {
        console.error("⚠️  STRIPE_SECRET_KEY not set in real mode");
        process.exit(1);
    }
    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
} else {
    // If MOCK=true, skip initializing stripe
    console.log("[MOCK] Running in mock mode: Stripe calls will be skipped.");
}

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// If you have a productsStore module, import to validate IDs / compute totals
const { getProductData } = require('./productStore');

app.post("/checkout", async (req, res) => {
    console.log("[/checkout] req.body:", req.body);
    const items = req.body.items; // e.g. [{ id: "...", quantity: N }, ...]

    if (!Array.isArray(items)) {
        return res.status(400).json({ error: "Invalid items array" });
    }

    /* Compute a fake total */
    if (MOCK) { 
        // Optionally validate and compute total:
        let total = 0;
        try {
            items.forEach(item => {
                // In mock mode, item.id might be your local product ID.
                const productData = getProductData(item.id);
                if (!productData) throw new Error(`Invalid product ID ${item.id}`);
                total += productData.price * item.quantity;
            });
        } catch (err) {
            console.warn("[MOCK] Invalid items:", err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log(`[MOCK] Checkout requested. Computed total $${total.toFixed(2)}`);

        // Return a fake Stripe session URL. Front-end will redirect to this.
        // We can send the client directly to /success (or /cancel) on our React app.
        // For deterministic success flow:
        const fakeUrl = "http://localhost:3000/success";
        return res.json({ url: fakeUrl });

    }  

    // REAL Stripe mode, if MOCK=false,
    try {
        // Build line_items array for Stripe: expects price IDs in item.id
        const lineItems = items.map(item => ({
            price: item.id,
            quantity: item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });

        return res.json({ url: session.url });

    } catch (err) {
        
        console.error("Stripe error:", err);
        return res.status(500).json({ error: "Failed to create Stripe session" });
    }

});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}! MOCK=${MOCK}`));