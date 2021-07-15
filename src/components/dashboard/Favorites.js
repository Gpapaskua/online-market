import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getFavorites, removeFavorite } from '../../redux/ProductsReducer'
import Favorite from './favorites/Favorite'

function Favorites(props) {
    const userId = props.currentUser?.uid
    const { favorites } = props
    useEffect(() => {
        userId && props.getFavorites(userId)
    }, [favorites])
    const removeFromFavorite = (productId, category, tittle, author, created) => {

        if (userId) {
            props.removeFavorite(userId, productId, category, tittle, author, created)
        }
    }
    return (
        <FavoritesTable>
            <FAV_HEADERS>
                <h4>დასახელება</h4>
                <h4>ავტორი</h4>
                <h4>თარიღი</h4>
                <h4>წაშლა</h4>
            </FAV_HEADERS>

            {
                favorites && favorites.map((fav) => {

                    return <Favorite category={fav.category}
                        id={fav.id} tittle={fav.tittle} author={fav.author} created={fav.created}
                        removeFromFavorite={removeFromFavorite} key={fav.id} />
                })
            }

        </FavoritesTable>

    )
}
const mapStateToProps = (state) => {

    return {
        currentUser: state.auth.currentUser,
        favorites: state.products.favorites
    }
}
export const FavoritesTable = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    @media screen and (max-width: 760px){
        width: 100%;
    }
`
export const FAV_HEADERS = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    place-items: center;
    background: #717b8a;
    h4{
        color: #191a19;
    }
    @media screen and (max-width: 760px){
        h4{
            font-size: 0.6rem;
        }
    }
`


export default connect(mapStateToProps, { getFavorites, removeFavorite })(Favorites)
