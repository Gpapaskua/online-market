import React from 'react'
import styled from 'styled-components'
import Product from './Product'

function ProductItems(props) {
    const { data } = props
    if (data?.length === 0) {
        return <NoProducts>
            <h3>პროდუქტი არ მოიძებნა!</h3>
        </NoProducts>
    }
    return (
        <ProductItemsPage>
            {props.addFavoriteMessage && <span>{props.addFavoriteMessage}</span>}
            <Container>
                {
                    data.map((prod, index) => {
                        return <Product prod={prod} productDetails={props.productDetails}
                            addToFavorites={props.addToFavorites} key={index}
                            addFavoriteMessage={props.addFavoriteMessage} getFavorites={props.getFavorites}
                            favorites={props.favorites} userId={props.userId} removeFavorite={props.removeFavorite} />
                    })
                }
            </Container>
        </ProductItemsPage>
    )
}

export const ProductItemsPage = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
`
const NoProducts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        color: #cc121f;
    }
`
export const Container = styled.div`
    width: 90%;
    margin: 1.5rem auto;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 1100px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
    
`

export default ProductItems
