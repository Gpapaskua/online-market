import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Details, ProductCard } from './Product'
import noImage from '../../assets/img/no-image.png'


function RecentProducts(props) {
    const { data, items, cat } = props
    const history = useHistory()
    const onCardClick = (id, category) => {
        history.push(`/products/${category}/${id}`)
    }
    if (items) {
        return (
            <RecentProduct>
                <RecentCategory>{cat}</RecentCategory>
                <RecentProductItems totalitems={items}>
                    {
                        data && data.map((prod, index) => {
                            return (
                                <ProductCard key={index} onClick={() => onCardClick(prod.id, prod.data.category)}>
                                    <figure>
                                        <img src={prod.images?.[0]?.url || noImage}
                                            alt="product" />
                                    </figure>
                                    <Details>
                                        <div>
                                            {prod.data?.tittle && <h1>{prod.data.tittle}</h1>}
                                            {prod.data?.price && <h1>{prod.data.price}₾</h1>}
                                        </div>
                                    </Details>
                                </ProductCard>
                            )
                        })
                    }
                </RecentProductItems>

            </RecentProduct>
        )
    }
    return null;
}
const RecentProduct = styled.article`
   display: flex;
   flex-direction: column;
   align-items: center;
    width: 100%;
    margin: 1rem auto;
    padding: 1rem 0;
    border-top: 2px solid #ebebeb;
    border-bottom: 2px solid #ebebeb;
    position: relative;
    z-index: 1;
    @media (max-width: 868px){
        width: 90%;
    }
    
`

const RecentProductItems = styled.div`
    margin-top: 1rem;
    width: 80%;
    display: grid;
    gap: 0.5rem;
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
const RecentCategory = styled.h2`
   
`




export default RecentProducts
