import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiMenuLine } from 'react-icons/ri'
import styled from 'styled-components'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

function Navbar(props) {
    const history = useHistory()
    const { searchString } = props
    const [burger, setBurger] = useState(false)
    const onSearch = (e) => {
        if (e.keyCode === 13)
            history.push('/search/' + searchString)
    }
    const onSearchChange = (e) => {
        props.setSearchString(e.target.value)
    }
    const onBurgerClick = () => {
        setBurger(!burger);
    }
    return (
        <Nav>
            <BurgerMenu>
                <RiMenuLine onClick={onBurgerClick} style={{ color: '#fff', fontSize: '1.3rem', marginLeft: '0.5rem', cursor: 'pointer' }} />
            </BurgerMenu>
            <NavMenu showBurgerMenu={burger}>
                <LogoBox>
                    <Logo to="/">ShopSpot</Logo>
                </LogoBox>
                <SearchBox>
                    <Search placeholder="ძებნა..." type="text" value={searchString} onChange={onSearchChange} onKeyUp={onSearch} />
                    <SearchIcon />
                </SearchBox>

                {!props.isLogged ? <LoggedOut /> : <LoggedIn user={props.user} />}
            </NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background: #77bd8f;
    padding: 10px 0;
    @media (max-width: 820px){
        flex-direction: column;
        align-items: flex-start;
    }
`
const NavMenu = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 820px){
        flex-direction: column;
        display: ${props => props.showBurgerMenu ? 'block' : 'none'};
    }
`
const BurgerMenu = styled.div`
    position: relative;
    display: none;
    i{
        font-size: 1.4rem;
        margin-left: 1rem;
        cursor: pointer;
    }
    @media (max-width: 820px){
        display: block;
    }
`
const LogoBox = styled.div`
    flex: 0.2;
    text-align: center;
    @media (max-width: 768px){
        width: 100%;
        flex: 0.3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Logo = styled(Link)`
    font-family: Shrikhand;
    text-decoration: none;
    font-size: 1.6rem;
    color: ${props => props.secondary ? "#fff" : "#000"};
    &:hover{
        text-decoration: none;
        color: #000;
    }
`
const SearchBox = styled.div`
    flex: 0.5;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 820px){
        flex: 1;
        width: 100%;
        margin: 1.5rem 0;
    }
`
const Search = styled.input`
    width: 90%;
    border: none;
    outline: none;
    padding: 0.7rem 0.4rem;
    border-radius: 0.5rem;
    text-decoration: none;
`
const SearchIcon = styled(AiOutlineSearch)`
    font-size: 1.5rem;
    position: absolute;
    right: 5%;
    color: #77bd8f;
`



export default Navbar
