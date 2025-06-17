/* Homepage */
import { Row, Col, Card  } from "react-bootstrap" // import Bootstrap’s grid components
import { productsArray } from "../productsStore"

const Store = () => {

  return (
    <>
      <h1>Welcome to the store!</h1>
      
      <Row              // Acts as a flex container
        xs={1}          // On extra small screens, show 1 column per row
        md={3}          // On medium and up screens, show 3 columns per row
        className="g-4" // Add Bootstrap gutter spacing (gap: 1.5rem) between columns and rows
      > 
        {/* Loop through productsArray and render each product in a Col */}
        { productsArray.map((product) => (

            <Col  // <Col>: Represents a grid column inside a row
                 key={product.id}       
                 align="center" // center content horizontally
            >

              {/* Show product title and price in the card */}
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card> 

            </Col>

          ))  
        }
      </Row>
    </>
  )
}

export default Store