//  static product list (CommonJS for Express)
const productsArray = [
    /* Each product has a unique id, a title, and a price */
    {
        id: "1", 
        // stripePriceId: "price_abc123", 
        title: "Coffee",
        price: 4.99
    },
    {
        id: "2", 
        // stripePriceId: "price_abc123", 
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "3", 
        // stripePriceId: "price_abc123", 
        title: "Camera",
        price: 39.99
    },
];

// Finds product by ID from the array
const getProductData = (id) => {

    const product = productsArray.find(p => p.id === id);

    if (!product) {
        console.error("Product data does not exist for ID: " + id);
        return undefined;
    }

    return product;
};

// When sending to Stripe in real mode, use product.stripePriceId
module.exports = { productsArray, getProductData };

