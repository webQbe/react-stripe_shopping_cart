//  static product list 
const productsArray = [
    /* Each product has a unique id, a title, and a price */
    {
        id: "1",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "2",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "3",
        title: "Camera",
        price: 39.99
    },
]

// Finds product by ID from the array
const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id)
        return undefined
    }

    return productData
}


export { productsArray, getProductData }