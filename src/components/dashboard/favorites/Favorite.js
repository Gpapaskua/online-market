import React from 'react'
import styled from 'styled-components'
import { FaTimesCircle } from 'react-icons/fa'


function Favorite(props) {
    const { category, id, tittle, created, author } = props
    return (
        <HEADER_ITEMS>


            <HEADER_ITEM>{tittle}</HEADER_ITEM>

            <HEADER_ITEM>{author}</HEADER_ITEM>
            <HEADER_ITEM>{created}</HEADER_ITEM>

            <REMOVE_FAVORITE onClick={() => props.removeFromFavorite(id, category, tittle, author, created)}>
                <span>
                    <FaTimesCircle />
                </span>
            </REMOVE_FAVORITE>


        </HEADER_ITEMS>
    )
}


export const HEADER_ITEMS = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    min-height: 4rem;
    margin-top: 1rem;
    svg{
        color: red;
        
    }
    @media screen and (max-width: 760px){
        font-size: 0.5rem;
        
    }
`
export const HEADER_ITEM = styled.div`
    background-color: #fff;
        width: 100%;
        height: 100%;
        margin: 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
`
export const REMOVE_FAVORITE = styled(HEADER_ITEM)`
    span{
        cursor: pointer;
        position: relative;
        &::after{
            content: 'წაშლა';
            position: absolute;
            left: 100%;
            
            font-size: 0.8rem; 
            display: none;
        }
        &:hover{
            &::after{
                display: block;
            }
        }
    }
`



export default Favorite
