import React from 'react'
import { FavoritesTable, FAV_HEADERS } from './Favorites'
import UserAd from './UserAd'



function User({ ads, onDetailsPage }) {
    return (
        <FavoritesTable>
            <FAV_HEADERS>
                <h4>აიდი</h4>
                <h4>დასახელება</h4>
                <h4>თარიღი</h4>
                <h4>ფავორიტებში დამატება</h4>
            </FAV_HEADERS>
            {ads && ads.map((ad, index) => {
                return <UserAd ad={ad} key={index} onDetailsPage={onDetailsPage} />
            })}

        </FavoritesTable>
    )
}
export default User
