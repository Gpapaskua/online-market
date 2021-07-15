import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { AddFavorite, getProducts, getFavorites, removeFavorite, clearProducts, unsetErrorMessage } from '../../redux/ProductsReducer'
import ProductItems from './ProductItems'
import loading from '../../assets/img/loading.gif'
import styled from 'styled-components'


function ProductsContainer(props) {
    const category = props.match.params.category
    const history = useHistory()
    const userId = props.currentUser?.uid
    const favorites = props.favorites
    useEffect(() => {
        document.title = category.toUpperCase()
        props.clearProducts()
        props.getProducts(category)
        props.unsetErrorMessage()
        if (userId) {
            props.getFavorites(userId)
        }
    }, [category, userId])
    const productDetails = (cat, productId) => {
        history.push(cat + '/' + productId)
    }
    const addToFavorites = (productId, category, tittle, created, author) => {
        if (userId) {
            props.AddFavorite(userId, productId, category, tittle, created, author);
        }
    }
    const removeFromFavorites = (productId, category, tittle, author) => {
        if (userId)
            props.removeFavorite(userId, productId, category, tittle, author)
    }
    if (props.loaded) {
        return <ProductItems data={props.products} productDetails={productDetails}
            addToFavorites={addToFavorites} addFavoriteMessage={props.addFavoriteMessage}
            getFavorites={props.getFavorites}
            favorites={favorites} userId={userId}
            removeFavorite={removeFromFavorites} />
    }
    return <InfoBox>
        <img src={loading} alt='იტვირთება' />
    </InfoBox>
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        loaded: state.products.isLoaded,
        currentUser: state.auth.currentUser,
        addFavoriteMessage: state.products.addFavoriteMessage,
        favorites: state.products.favorites,
        errorMessage: state.products.errorMessage
    }
}

const InfoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default connect(mapStateToProps, { getProducts, AddFavorite, getFavorites, removeFavorite, clearProducts, unsetErrorMessage })(ProductsContainer)
