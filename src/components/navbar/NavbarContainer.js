import React from 'react'
import { connect } from 'react-redux'
import { setSearchString } from '../../redux/ProductsReducer'
import Navbar from './Navbar'

function NavbarContainer(props) {
    return (
        <Navbar isLogged={props.isLogged} user={props.user}
            setSearchString={props.setSearchString} searchString={props.searchString} />
    )
}

const mapDispatchToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.currentUser,
        searchString: state.products.searchString,

    }
}

export default connect(mapDispatchToProps, { setSearchString })(NavbarContainer)
