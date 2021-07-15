import React, { useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import styled from 'styled-components'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddNewProduct from './components/products/newProduct/AddNewProduct'
import SignUp from './components/auth/SignUp'
import RecentProductsContainer from './components/products/RecentProductsContainer'
import NavbarContainer from './components/navbar/NavbarContainer'
import DashboardContainer from './components/dashboard/DashboardContainer'
import { connect } from 'react-redux'
import { getUser } from './redux/authReducer'
import ProductsContainer from './components/products/ProductsContainer'
import ProductDetailsContainer from './components/products/ProductDetailsContainer'
import SearchResults from './components/products/SearchResults'
import Header from './components/header/Header'
import Page from './common/Page'
import UserContainer from './components/dashboard/UserContainer'
import ErrorPage from './components/404/ErrorPage'
import Footer from './footer/Footer'


function App(props) {

  useEffect(() => {
    props.getUser()
  }, [])
  return (
    <div>
      <Router>
        <NavbarContainer />
        <Route exact path="/" render={() => <Sidebar />} />
        <Route path="/products" render={() => <Sidebar />} />
        <Route exact path="/" render={() => <Header />} />
        <AppContent>
          <Switch>
            <Route exact path="/" render={(props) => (

              <RecentProductsContainer {...props} />
            )} />
            <Route exact path="/login" render={(props) => (
              <Page tittle='შესვლა'>
                <Login {...props} />
              </Page>)} />
            <Route exact path="/search/:searchString" render={(props) => (
              <Page tittle='ძებნა'>
                <SearchResults {...props} />
              </Page>)} />
            <Route exact path="/signup" render={(props) => (
              <Page tittle='რეგისტრაცია'>
                <SignUp {...props} />
              </Page>)} />
            <Route path="/newproduct" render={(props) => (
              <Page tittle='დამატება'>
                <AddNewProduct {...props} />
              </Page>)} />
            <Route exact path="/user/:id" render={(props) => (
              <Page tittle='ყველა განცხადება'>
                <UserContainer {...props} />
              </Page>)} />
            <Route exact path="/dashboard/:profilePage?" render={(props) => (
              <Page tittle='პროფილი'>
                <DashboardContainer {...props} />
              </Page>)} />
            <Route exact path="/products/:category" render={(props) => <ProductsContainer {...props} />} />
            <Route exact path="/products/:category/:id" render={(props) => <ProductDetailsContainer {...props} />} />
            <Route path="*" render={(props) => (
              <Page tittle='404'>
                <ErrorPage {...props} />
              </Page>)} />
          </Switch>
        </AppContent>
      </Router >
    </div>
  )
}
const AppContent = styled.div`
    display: grid;
    width: 100%;
    min-height: 100vh;
    gap: 2rem;
    background-color: #fff;;
    
`

export default connect(null, { getUser })(App)
