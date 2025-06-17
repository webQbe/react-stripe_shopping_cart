import { Button, 
         Container, 
         Navbar, 
         Modal } from "react-bootstrap" // Import Bootstrap-styled components
import { useState } from "react"

const NavBar = () => {

    /* Control whether modal is shown */
    const [ show, setShow ] = useState(false) // determine visibility of modal
    const handleClose = () => setShow(false)  // closes modal
    const handleShow = () => setShow(true)    // opens modal

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
                <Button onClick={ handleShow }> Cart 0 Items </Button>
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
                <h1>This is the modal body</h1> {/* placeholder text */}
            </Modal.Body>

        </Modal>
    </>
  )
}

export default NavBar