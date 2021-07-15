import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { setCategory, setData, setNewProduct, setSpecifications } from '../../../redux/NewProductReducer'
import ProductAuthor from './ProductAuthor'
import ProductCategory from './ProductCategory'
import ProductInfo from './ProductInfo'
import Specifications from './Specifications'
import { compose } from 'redux'
import AddResult from './AddResult'



const AddNewProduct = (props) => {
    const { user } = props
    const addNewProduct = (data) => {
        if (user) {
            props.setNewProduct(data, user.uid, user.displayName)
        }
    }

    if (user) {

        return (
            <Router>

                <Route exact path="/newproduct" render={() => <ProductAuthor setData={props.setData} />} />
                <Route exact path="/newproduct/step2" render={() => <ProductCategory {...props} setCategory={props.setCategory} />} />
                <Route exact path="/newproduct/step3" render={() => <Specifications {...props} />} />
                <Route exact path="/newproduct/step4" render={() => <ProductInfo {...props} />} />
                <Route exact path="/newproduct/result" render={() => <AddResult {...props} addNewProduct={addNewProduct} />} />

            </Router>
        )
    }
    else {
        return <Redirect to="/login" />
    }
}
const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.currentUser,
        error: state.newProduct.error,
        data: state.newProduct.data,
        addSuccess: state.newProduct.addSuccess,
        category: state.newProduct.category
    }
}


export default compose
    (withRouter,
        connect(mapStateToProps, { setNewProduct, setData, setCategory, setSpecifications }))
    (AddNewProduct)
