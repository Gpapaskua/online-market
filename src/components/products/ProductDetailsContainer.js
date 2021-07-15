import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getProductData, unsetProduct } from '../../redux/ProductReducer'
import ProductDetails from './ProductDetails'

function ProductDetailsContainer(props) {
    const productId = props.match.params.id
    const category = props.match.params.category
    const prod = props.product
    const errorMessage = props.errorMessage
    const currentUser = props.currentUser
    useEffect(() => {
        props.unsetProduct()
        props.getProductData(productId, category)
    }, [])
    if (errorMessage) {
        return <ErrorBox>
            <h4>{errorMessage}</h4>
        </ErrorBox>
    }
    if (prod) {
        if (prod.uid === currentUser?.uid) {
            return <ProductDetails prod={prod} allowEdit={true} />
        }
        return <ProductDetails prod={prod} allowEdit={false} />
    }
    return (
        <div>Waiting</div>
    )

}
const mapStateToProps = (state) => {
    return {
        product: state.product.product,
        currentUser: state.auth.currentUser,
        errorMessage: state.product.errorMessage
    }
}
export const ErrorBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    h4{
        font-size: 1.3rem;
    }

`

export default connect(mapStateToProps, { getProductData, unsetProduct })(ProductDetailsContainer)
