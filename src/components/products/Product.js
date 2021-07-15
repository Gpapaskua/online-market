import React, { useEffect, useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import styled from 'styled-components'
import noImage from '../../assets/img/no-image.png'



function Product(props) {
    const { prod } = props
    const { favorites } = props
    const [avatar, setAvatar] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)
    const [index, setIndex] = useState(null)
    useEffect(() => {
        if (prod.images) {
            setAvatar(prod.images[0].url)
        }
        if (favorites) {
            if (favorites.some(fav => fav.id === prod.id)) {
                setIsFavorite(true)
                setIndex(favorites.findIndex(x => x.id === prod.id))
            }
            else {
                setIsFavorite(false)
            }

        }
    }, [favorites, isFavorite])

    const onFavoriteClickHandler = (e) => {
        e.stopPropagation();
        isFavorite ? props.removeFavorite(prod.id, prod.data.category, prod.data.tittle, prod.data.author) :
            props.addToFavorites(prod.id, prod.data.category, prod.data.tittle,
                prod.created.toDate().toLocaleDateString(), prod.author)
    }

    return (

        <ProductCard onClick={() => props.productDetails(prod.data.category, prod.id)}>
            <Favorite onClick={onFavoriteClickHandler}>
                <HeartIcon favorite={isFavorite ? 1 : 0} />
            </Favorite>
            <figure>
                <img src={avatar || noImage} alt='პროდუქტის სურათი' />
            </figure>
            <Details>
                <div>
                    <h1>{prod.data.tittle}</h1>
                    <h2>{prod.data.price && prod.data.price}₾</h2>
                </div>

            </Details>


        </ProductCard>
    )
}

export const ProductCard = styled.div`
     position: relative;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    height: 300px;
    overflow: hidden;
    width: 190px;
    background-color: #fff;
    figure {
        margin: 10px auto 0 auto;
        width: 90%;
        height: 60%;
        
    img{
        width: 90%;
        height: 100%;
        margin-left: 0.5rem;
    }
    &:hover{
       cursor: pointer;
       opacity: 0.8;
    }
   
}
`
export const Favorite = styled.span`
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 30;
    i{
        font-size: 2rem;
        color: red;
    }
    &:hover{
        cursor: pointer;
        
    }
`
export const Details = styled.section`
    background-color: #FFF;
    padding: 20px;
    width: 100%;
    text-overflow: ellipsis;
    
    h1{
        font-size: 1rem;
        font-weight: 400;
        overflow: hidden;
    }
    h2{
        font-size: 0.9rem;
        font-weight: 400;
    }
    &:hover{
        cursor: pointer;
        opacity: 0.8rem;    
    }
`
export const HeartIcon = styled(BsFillHeartFill)`
    font-size: 1.8rem;
    color: ${props => props.favorite ? 'red' : '#ccc'};
    &:hover{
        font-size: 1.9rem;
    }
`

export default Product
