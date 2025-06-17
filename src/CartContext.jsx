import { createContext, useState } from 'react'
import { productsArray, getProductData } from './productsStore'

// Define & export context object for sharing cart state globally
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {}, 
    addOneToCart: () => {},       
    removeOneFromCart: () => {},  
    deleteFromCart: () => {},     
    getTotalCost: () => {}        
}) 

// Define & export context provider that manages cart logic
export const CartProvider = ({ children }) => {

    const [ cartProducts, setCartProducts ] = useState([])

    // Calculate how many of a specific item is in the cart
    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        if (quantity === undefined) return 0
        return quantity
    }

    // Add 1 quantity of a product
    const addOneToCart = (id) => {
        const quantity = getProductQuantity(id)

        if (quantity === 0) { // inserts it if it's not in the cart
                setCartProducts([
                    ...cartProducts, {
                        id: id,
                        quantity: 1
                    }
                ])
        } else {
            setCartProducts( cartProducts.map( product => 
                                                product.id === id
                                                    ? { ...product, 
                                                            quantity: product.quantity + 1 }
                                                    : product     
                                        ))
        }
    }

    // Decrease quantity
    const removeOneFromCart = (id) => {
        const quantity = getProductQuantity(id)

        if (quantity == 1) { // deletes the item if quantity is 1

            deleteFromCart(id)

        } else {

            setCartProducts( cartProducts.map( product => 
                                                product.id === id
                                                    ? { ...product, 
                                                            quantity: product.quantity - 1 }
                                                    : product     
                                ))
        }
    }

    // Fully remove an item from the cart
    const deleteFromCart = (id) => {
        setCartProducts(
                    cartProducts => cartProducts.filter(
                                    currentProduct => { return currentProduct.id != id }
                                )
                )}
    
    // Calculate total cost based on cart state and productsArray
    const getTotalCost = () => {
                let totalCost = 0
                cartProducts.map((cartItem) => {
                    // Find product by ID from the array
                    const productData = getProductData(cartItem.id)
                    totalCost += ( productData.price * cartItem.quantity )
                })
                return totalCost
            }

    // Get total quantity of all products        
    const getTotalQuantity = () => {

                return cartProducts.reduce((total, product) => total + product.quantity, 0)

                /* Here's how the reduction works:
                    Start with total = 0
                    First product: total = 0 + 2 (current) → 2 (total)
                    Second product: total = 2 + 1 (current) → 3 (total)
                    Third product: total = 3 + 3 (current) → 6 (total)
                ✅ Final result: 6 */

            }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getTotalQuantity
    }

   return(
        <CartContext.Provider value={contextValue}>
            { children }
        </CartContext.Provider>
   )
}

export default CartProvider
