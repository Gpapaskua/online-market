import React from 'react'
import ProductItems from './ProductItems'

function Products(props) {
    return <ProductItems data={props.data} addToFavorites={props.addToFavorites}
        productDetails={props.productDetails} addFavoriteMessage={props.addFavoriteMessage}
        getFavorites={props.getFavorites} favorite={props.favorite} />
}



export default Products
