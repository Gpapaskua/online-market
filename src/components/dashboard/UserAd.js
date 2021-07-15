import React from 'react'
import { HEADER_ITEM, HEADER_ITEMS } from './favorites/Favorite'

function UserAd({ ad, onDetailsPage }) {

    return (
        <HEADER_ITEMS>
            <HEADER_ITEM>
                {ad.id}
            </HEADER_ITEM>
            <HEADER_ITEM>
                {ad.tittle}
            </HEADER_ITEM>
            <HEADER_ITEM>
                {ad.created.toDate().toLocaleDateString()}
            </HEADER_ITEM>
            <HEADER_ITEM onClick={() => onDetailsPage(ad.category, ad.id)}>
                სრულად ნახვა
            </HEADER_ITEM>

        </HEADER_ITEMS>
    )
}

export default UserAd
