import { useContext } from "react"
import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { CartContext } from "../CartContext"

const ProductCard = ({ product }) => {

  // Access full cart
  const cart = useContext(CartContext)
  // Get product quantity
  const productQuantity = cart.getProductQuantity(product.id)

  console.log(cart.items)

  return (
    /* Show product title, price, Add To Card button in the card */
    <Card>
        <Card.Body>
            <Card.Title>{ product.title }</Card.Title>
            <Card.Text>${product.price.toFixed(2)}</Card.Text> 
            {/* Quantity Increase button */}
            <Button 
              className="m-1 px-2"
              size="sm"
              onClick={() => cart.addOneToCart(product.id)} // Add product to cart
            >+</Button>     
            {/* Quantity Decrease button */}  
            <Button className="m-1 px-2" size="sm" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
            {/* Product Remove button */}  
            <Button className="m-1" size="sm" variant="danger" onClick={() => cart.deleteFromCart(product.id)}>Remove</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard