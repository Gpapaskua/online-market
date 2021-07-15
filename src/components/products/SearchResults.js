import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { searchProduct, clearSearchResults, AddFavorite } from '../../redux/ProductsReducer'
import ProductItems from './ProductItems'
import loading from '../../assets/img/loading.gif'

function SearchResults(props) {
    const { searchString } = useParams()
    const { searchResults } = props
    const userId = props.currentUser?.uid
    const history = useHistory()
    useEffect(() => {
        props.clearSearchResults()
        props.searchProduct(props.categories, searchString)
    }, [searchString])
    const productDetails = (category, productId) => {
        history.push(`../products/${category}/${productId}`)
    }
    const addToFavorites = (productId, category, tittle, created, author) => {
        if (userId) {
            props.AddFavorite(userId, productId, category, tittle, created, author);
        }
    }
    if (searchResults) {
        return (
            <ProductItems data={searchResults} productDetails={productDetails} addToFavorites={addToFavorites} />
        )
    }
    return <div>
        <img src={loading} alt='იტვირთება' />
    </div>
}
const mapStateToProps = (state) => {
    return {
        searchResults: state.products.searchResults,
        categories: state.products.categories,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { searchProduct, clearSearchResults, AddFavorite })(SearchResults)
