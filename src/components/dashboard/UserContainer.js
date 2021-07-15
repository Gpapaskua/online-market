import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setMyAds } from '../../redux/ProfileReducer'
import User from './User'


function UserContainer(props) {
    const userId = props.match.params.id
    useEffect(() => {
        userId && props.setMyAds(userId)
    }, [userId])
    const onDetailsPage = (category, id) => {
        props.history.push(`../products/${category}/${id}`)
    }
    if (props.ads) {
        return <User ads={props.ads} onDetailsPage={onDetailsPage} />
    }
    return (
        <div>
            Waiting...
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        ads: state.profile.ads
    }
}

export default connect(mapStateToProps, { setMyAds })(UserContainer)
