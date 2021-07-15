import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { AiOutlineMenuFold } from 'react-icons/ai'
import styled from 'styled-components'
function Sidebar() {
    const [transform, setTransform] = useState(0)
    const [show, setShow] = useState(false)
    const onNext = (e) => {
        if (e.target.id === 'next' && transform > -1500) {
            setTransform(transform - 240)
        }
        if (e.target.id === 'previous' && transform < 0) {
            setTransform(transform + 240)
        }
    }
    const showCategories = () => {
        setShow(!show);
    }
    return (
        <SidebarBox>
            <ShowCategories onClick={showCategories}>
                <span >
                    <AiOutlineMenuFold />კატეგორიები</span>
            </ShowCategories>
            <Box1>
                <Box2 show={show}>
                    <Categories temp={transform}>
                        <Category><CategoryLink to="../products/mobile">მობილური ტელეფონები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/tv'>ტელევიზორები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/music-technic'>მუსიკალური ტექნიკა</CategoryLink></Category>
                        <Category><CategoryLink to='../products/headphones'>ყურსასმენები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/desktopPC'>პერსონალური კომპიუტერები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/computer-parts'>კომპიუტერის ნაწილები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/tablets_ipads'>პლანშეტები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/mp3-players'>MP3-პლეერები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/video'>ვიდეოკამერები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/home-technic'>საოჯახო ტექნიკა</CategoryLink></Category>
                        <Category><CategoryLink to='../products/laptops'>ლეპტოპები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/smart-watches'>SMART საათები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/loud-speakers'>დინამიკები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/photo-cameras'>ფოტოკამერები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/drones'>დრონები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/tv-equipment'>ტელევიზორის აქსესუარები</CategoryLink></Category>
                        <Category><CategoryLink to='../products/memory-cards'>მეხსიერების ბარათები</CategoryLink></Category>
                    </Categories>
                </Box2>
                {transform > -1500 ?
                    <Next id={'next'} aria-label={'შემდეგი'} onClick={onNext}><GrNext /></Next> : null}
                {transform < 0 ?
                    <Previous id={'previous'} aria-label={'წინა'} onClick={onNext}><GrPrevious /></Previous> : null}
            </Box1>
        </SidebarBox>
    )
}
const SidebarBox = styled.div`
   display: flex;
   flex-direction: column;
    margin-top: 15px;
    width: 100%;
    background: rgb(253, 253, 253);
    border-radius: 2px;
    overflow: hidden;
    @media (max-width: 768px){
        background: #FFF;
        
    }
    
`
const ShowCategories = styled.div`
        position: relative;
        margin-bottom: 0.5rem;
        display: none;
        
    span{
        position: absolute;
        left: 10px;
        color: #000;
        cursor: pointer;
        svg{
           margin-right: 0.5rem;
           transform: translate(-10%, 30%); 
        }
    }
    @media (max-width: 768px){
        display: block;
        
    }
`
const Box1 = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
    @media (max-width: 768px){
        margin-top: 1.5rem;
        margin-left: 0;
        margin-right: 0;
    }
    
`
const Box2 = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
    @media (max-width: 768px){
        display: ${props => props.show ? 'block' : 'none'}; 
        width: 80%;
        flex-direction: column;
    }
    
`
const Categories = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    transform: ${props => props.temp ? `translate3d(${props.temp}px, 0px, 0px)` : 'translate3d(0px, 0px, 0px)'};
    will-change: transform;
    transition: all 0.5s ease-in 0s;
    @media (max-width: 768px){
        flex-direction: column;
        width: 90%;
        align-items: center;
    }

`
const Category = styled.li`
    text-decoration: none;
    border: 1px solid rgb(223, 223, 223);
    color: #000;
    padding: 4px 15px 0px;
    white-space: nowrap;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    @media (max-width: 768px){
        width: 90%;
        overflow-x: hidden;
    }
`
const CategoryLink = styled(Link)`
    text-decoration: none;
    font-size: 0.9rem;
    color: #8c95a3;
    position: relative;
    
    &:focus, &:hover, &:visited, &:link {
        text-decoration: none;
    }
    &:hover{
        &::after{
            display: inline-block;

        }
        color: #62666e;
        
    }
    &:hover:after{
        opacity: 1;
    }
    
    @media (max-width: 768px){
        margin-left: 3.5rem;
    }
`
const Next = styled.button`
    position: absolute;
    top: 15px;
    right: -40px;
    padding: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: none;
    background: rgb(242, 242, 242);
    z-index: 2;
    width: 42px;
    height: 47px;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    svg{
        pointer-events: none;
    }
    &:focus{
        outline: none;
    }
    @media (max-width: 768px){
        display: none;
    }
`
const Previous = styled(Next)`
    left: 0px;
    &:focus{
        outline: none;
    }
    
`


export default Sidebar
