import React from 'react'
import styled from 'styled-components'
import { HEADER_ITEMS, HEADER_ITEM, REMOVE_FAVORITE } from '../favorites/Favorite'
import { FaTimesCircle } from 'react-icons/fa'

function Ad({ ad, onAdClick, onDeleteProduct }) {
    console.log(ad)
    return (
        <HEADER_ITEMS onClick={() => onAdClick(ad.category, ad.id)}>
            <HEADER_ITEM>
                {ad.id}
            </HEADER_ITEM>
            <HEADER_ITEM>
                {ad.tittle}
            </HEADER_ITEM>
            <HEADER_ITEM>
                {ad.created.toDate().toLocaleDateString()}
            </HEADER_ITEM>
            <REMOVE_FAVORITE>
                <span>
                    <FaTimesCircle onClick={(e) => { e.stopPropagation(); onDeleteProduct(ad.category, ad.id, ad.tittle, ad.created) }} />
                </span>
            </REMOVE_FAVORITE>

        </HEADER_ITEMS>
    )
}

const AdItem = styled.tr`
    margin: 1rem 0;
    td:nth-child(2){
        position: relative;
        &::after{
        content: 'სრულად ნახვა';
        font-size: 0.8rem;
        position: absolute;
        top: 70%;
        right: 20%;
        color: #0398fc;
        display: none;
    }
   
    }
    &:hover{
        background: #c1c6c9;
        cursor: pointer;
        td:nth-child(2){
            &::after{
                display: inline-block;
            }
        }
    }
`

export default Ad
