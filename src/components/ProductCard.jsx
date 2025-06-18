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

            { productQuantity > 0 ? 
                /* show the cart controls */
                <>
                  <Form as={Row}>

                      {/* Display how many of this product are currently in the cart */}
                      <Form.Label column sm="6">
                        In Cart: { productQuantity } <br />
                      </Form.Label>

                      {/* Allow increasing/decreasing quantity with + and – */}
                      <Col sm="6" className="my-2">
                        <Button  
                          onClick={() => cart.addOneToCart(product.id)} 
                          className="mx-2 qty">+</Button>
                        <Button  
                          onClick={() => cart.removeOneFromCart(product.id)} 
                          className="mx-2 qty">-</Button>                        
                      </Col>
                  </Form> 

                  {/* Display total cost for the product */}
                  Total: ${(productQuantity * product.price).toFixed(2)}
                  <br />
                  {/* Remove the product from the cart entirely */}
                  <Button 
                      variant="danger" 
                      onClick={() => cart.deleteFromCart(product.id)} 
                      className="my-2 rm">
                        Remove
                  </Button>
                </>
                : /* Show Add to Cart button */
                <Button 
                  variant="primary" 
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  Add To Cart
                </Button>
            }
        </Card.Body>
    </Card>
  )
}

export default ProductCard