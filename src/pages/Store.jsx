/* Homepage */
import { Row, Col, Card  } from "react-bootstrap" // import Bootstrap’s grid components

const Store = () => {

  // Products array
  const products = [1, 2, 3, 4, 5]

  return (
    <>
      <h1>Welcome to the store!</h1>
      
      <Row              // Acts as a flex container
        xs={1}          // On extra small screens, show 1 column per row
        md={3}          // On medium and up screens, show 3 columns per row
        className="g-4" // Add Bootstrap gutter spacing (gap: 1.5rem) between columns and rows
      > 
        { products.map((id) => ( // Map through products array

            <Col key={id}       // <Col>: Represents a grid column inside a row
                 align="center" // center content horizontally
            >

              {/* placeholder product card */}
              <Card>Product {id}</Card> 

            </Col>

          ))  
        }
      </Row>
    </>
  )
}

export default Store