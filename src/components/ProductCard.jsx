import { Card, Button, Form, Row, Col } from "react-bootstrap"

const ProductCard = ({ product }) => {

  return (
    /* Show product title, price, Add To Card button in the card */
    <Card>
        <Card.Body>
            <Card.Title>{ product.title }</Card.Title>
            <Card.Text>${product.price.toFixed(2)}</Card.Text> 
            <Button variant="primary">Add To Cart</Button>       
        </Card.Body>
    </Card>
  )
}

export default ProductCard