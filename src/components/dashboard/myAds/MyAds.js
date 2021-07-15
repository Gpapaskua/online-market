import React from 'react'
import { useHistory } from 'react-router'
import { FavoritesTable, FAV_HEADERS } from '../Favorites'
import Ad from './Ad'

function MyAds({ ads, onDeleteProduct }) {
    const history = useHistory()
    const onAdClick = (category, productId) => {
        history.push('products/' + category + '/' + productId)
    }
    return (
        <FavoritesTable>
            <FAV_HEADERS>
                <h4>აიდი</h4>
                <h4>დასახელება</h4>
                <h4>თარიღი</h4>
                <h4>მოქმედება</h4>
            </FAV_HEADERS>
            {ads && ads.map((ad, index) => {
                return <Ad ad={ad} key={index} onAdClick={onAdClick} onDeleteProduct={onDeleteProduct} />
            })}

        </FavoritesTable>
    )
}



export default MyAds
