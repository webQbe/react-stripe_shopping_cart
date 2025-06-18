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

                    {/* Add "Purchase items!" button */}
                    <Button variant="success">Purchase items!</Button>
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