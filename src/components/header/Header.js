import React from 'react'
import styled from 'styled-components'
import { RiHeartAddLine } from 'react-icons/ri'
import { FcSearch } from 'react-icons/fc'
import { MdNoteAdd } from 'react-icons/md'

function Header() {
    return (
        <HeaderPage>
            <HeaderInfo>

                <h4>ShopSpot</h4>
                <div><p><FcSearch />მოძებნე სასურველი პროდუქტი</p></div>
                <div><p><MdNoteAdd />დაამატე განცხადებები</p></div>
                <div><p><RiHeartAddLine />დაამატე ფავორიტი პროდუქტები</p></div>

            </HeaderInfo>
            <HeaderImage>
                <img src={'https://image.freepik.com/free-vector/laptop-tablet-desktop-mobile_1284-3389.jpg'} />
            </HeaderImage>
        </HeaderPage>
    )
}

const HeaderPage = styled.header`

    width: 90%;
    min-height: 75vh;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #fff;
    z-index: 20;
    margin: 1rem auto;
    border-radius: 0.2rem;
    @media screen and (max-width: 870px){
        flex-direction: column;
        align-items: center;
    }
`
const HeaderInfo = styled.article`
    min-height: 100%;
    flex: 0.4;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;
    @media screen and (max-width: 870px){
        width: 90%;
        align-items: center;
    }
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h4{
    
        font-family: Shrikhand;
        font-size: 2.2rem;
        
    }
    svg{
            margin-right: 0.5rem;
            font-size: 1.3rem;
        }
    p{
        width: 100%;
        font-size: 1.2rem;
        color: #506355;
        
    }

    
    @media screen and (max-width: 870px){
       flex: 100%;
       div{
           display: flex;
           flex-direction: column;
           align-items: center;
           p{
               width: 100%;
           }
       }
       
    }
    
`
const HeaderImage = styled.article`
    z-index: 1;
    min-height: 100%;
    flex: 0.5;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`


export default Header
