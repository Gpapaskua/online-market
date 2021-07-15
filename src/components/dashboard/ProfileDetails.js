import React from 'react'
import Favorites from './Favorites'
import MyAds from './myAds/MyAdsContainer'
import MyProfile from './my-profile/MyProfile'

function ProfileDetails(props) {
    const { page } = props
    switch (page) {
        case 'ads':
            return <MyAds />
        case 'my-page':
            return <MyProfile />
        case 'favorites':
            return <Favorites />
        default:
            return <MyAds />
    }

}

export default ProfileDetails
