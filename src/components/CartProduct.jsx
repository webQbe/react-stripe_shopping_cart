import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../CartContext"
import { getProductData } from "../productsStore"

const CartProduct = ({ product }) => { // Receive product as a prop

    const cart = useContext(CartContext)
    const id = product.id
    const quantity = product.quantity
    const productData = getProductData(id) //  Get the full product info from productsStore

  return (
    <>  
        {/* Render each item in the cart */}
        <h3>{ productData.title }</h3>  {/* Display product title */}
        <p>{ quantity } total </p>      {/* Show quantity */}
        {/* Show total price for the product */}
        <p>${ (quantity * productData.price).toFixed(2) }</p> 
        {/* Product Remove button  */}
        <Button size="m" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        <hr />
    </>
  )
}

export default CartProduct