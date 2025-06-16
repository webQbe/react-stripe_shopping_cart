import { Button, 
         Container, 
         Navbar, 
         Modal } from "react-bootstrap" // Import Bootstrap-styled components

const NavBar = () => {

  return (
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
            <Button>Cart 0 Items</Button>
        </Navbar.Collapse>   

    </Navbar>
  )
}

export default NavBar