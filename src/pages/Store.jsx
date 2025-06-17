/* Homepage */
import { Row, Col, Card  } from "react-bootstrap" // import Bootstrap’s grid components
import { productsArray } from "../productsStore"
import ProductCard from "../components/ProductCard"

const Store = () => {

  return (
    <>
      <h1 align="center" className="p-3">Welcome to the store!</h1> 
      
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
              {/* Render ProductCard with product data */}
              <ProductCard product={product}/>

            </Col>

          ))  
        }
      </Row>
    </>
  )
}

export default Store