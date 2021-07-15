import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setMyAds, deleteProduct } from '../../../redux/ProfileReducer'
import MyAds from './MyAds'

function MyAdsContainer(props) {
    const userId = props.userId
    const onDeleteProduct = (category, productId, tittle, created) => {
        productId && props.deleteProduct(userId, category, productId, tittle, created)
    }
    useEffect(() => {
        props.setMyAds(userId)
    }, [userId])
    return <MyAds ads={props.ads} onDeleteProduct={onDeleteProduct} message={props.message} />

}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.currentUser.uid,
        ads: state.profile.ads,
        message: state.profile.message
    }
}

export default connect(mapStateToProps, { setMyAds, deleteProduct })(MyAdsContainer)
