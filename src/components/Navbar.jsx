import { Button, 
         Container, 
         Navbar, 
         Modal } from "react-bootstrap" // Import Bootstrap-styled components
import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import { getProductData } from "../productsStore"

const NavBar = () => {

    /* Control whether modal is shown */
    const [ show, setShow ] = useState(false) // determine visibility of modal
    const handleClose = () => setShow(false)  // closes modal
    const handleShow = () => setShow(true)    // opens modal

    // Access full cart
    const cart = useContext(CartContext)

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
                
            { cart.items.length === 0 ? ( // Check for item count

                <h1>Your cart is empty</h1>

                ) : (

                    cart.items.map((item) => {
                        
                        // Fetch product data
                        const product = getProductData(item.id)

                        return (

                            <div key={item.id}>
                                <h5>{ product.title }</h5>
                                <p>Quantity: { item.quantity }</p>
                                {/* Display total price for the product */}
                                <p>Price: ${(product.price * item.quantity).toFixed(2)}</p>
                            </div>

                        )
                        
                    })
            )}

            {/* Display Grand Total Price */}
            <h4>Total: ${cart.getTotalCost().toFixed(2)}</h4> 

            </Modal.Body>

        </Modal>
    </>
  )
}

export default NavBar