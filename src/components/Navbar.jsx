import { Button, 
         Navbar, 
         Modal } from "react-bootstrap" // Import Bootstrap-styled components
import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import CartProduct from "./CartProduct"

const NavBar = () => {

    /* Control whether modal is shown */
    const [ show, setShow ] = useState(false) // determine visibility of modal
    const handleClose = () => setShow(false)  // closes modal
    const handleShow = () => setShow(true)    // opens modal

    // Access full cart
    const cart = useContext(CartContext)

    const checkout = async (simulateCancel = false) => { // simulateCancel = true for cancel, false for purchase
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                    items: cart.items,
                    simulateCancel: simulateCancel // send flag to mock backend
                })
        })
        .then(res => res.json())
        .then(response => {
            if (response.url){
                window.location.assign(response.url) // Forwarding user to Stripe in real mode
                /* In mock mode, the server returns { url: "http://localhost:3000/success" } */
            } else if (response.error) {
                console.error("Checkout error:", response.error);
                // show error to user
            }
        })
        .catch(err => {
            console.error("Network or server error:", err);
        });
    }

  return (
    <>
        <Navbar className="sm"> {/* Render responsive navigation bar */}

            <Navbar.Brand       // Display brand name/logo
                href="/"        // Clicking takes user to homepage
            >
                E-commerce Store
            </Navbar.Brand> 

            <Navbar.Toggle />   {/* Hamburger menu button on smaller screens */}

            <Navbar.Collapse    // Contains items that should collapse/expand based on screen size 
                className="justify-content-end" // align content to the right
            >   
                {/* Button to Show Modal */}
                <Button onClick={ handleShow }> 
                    Cart { cart.getTotalQuantity() }  Items {/* total quantity of all products */}
                </Button>
                
            </Navbar.Collapse>   

        </Navbar>

        <Modal 
            show={show} // controls visibility based on current state
            onHide={ handleClose } // let modal close when user click outside it or press Esc
        >
            {/* Modal contains title & body */}
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
            { cart.items.length > 0 ? ( // If there are items in the cart

                <>
                   { cart.items.map((item) => { // Map over cart.items

                        // Render each CartProduct
                        return <CartProduct key={item.id} product={item} />
                        
                    })}

                    {/* Show total cart value */}
                    <h4>Total: ${cart.getTotalCost().toFixed(2)}</h4> 

                    {/* Cancel button */}
                    <Button style={{ marginRight: '0.25rem' }}
                        variant="danger" 
                        // Pass boolean argument to checkout()
                        onClick={() => checkout(true)} // true for cancel
                    >
                        Cancel
                    </Button>

                    {/* "Purchase items!" button */}
                    <Button
                        variant="success"
                        onClick={() => checkout(false)} // Call checkout, false for purchase
                    > 
                        Purchase items!
                    </Button>
                </>

                ) : ( 

                 <h1>Your cart is empty</h1>
                 /* Purchase button & total cart value is hidden when cart is empty */    
            )}
         
            </Modal.Body>
        </Modal>
    </>
  )
}

export default NavBar