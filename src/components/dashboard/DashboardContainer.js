import React from 'react'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'

function DashboardContainer(props) {

    const page = props.match.params.profilePage;
    return (
        props.isLogged && <Dashboard currentUser={props.currentUser} page={page} />
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, {})(DashboardContainer)
