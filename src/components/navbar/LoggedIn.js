import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
import { RiAddCircleFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { logOut } from '../../redux/authReducer'

function LoggedIn(props) {
    const emailVerified = props.user.emailVerified
    const [dropMenu, setDropMenu] = useState(false)
    const toggleDropDown = () => {
        setDropMenu(!dropMenu);
    }

    return (
        <LoggedInBox>
            <AddProduct to="/dashboard/favorites">
                <MdFavorite />
                ფავორიტები</AddProduct>
            <AddProduct to="/newproduct">
                <RiAddCircleFill />
                დაამატე</AddProduct>

            <DropdownMenu>
                <UserName onClick={toggleDropDown}
                    shownotification={emailVerified}><FaUserAlt />ჩემი გვერდი</UserName>
                {dropMenu ?
                    <DropdownContent>
                        <ProfileLink to={"/dashboard"} shownotification={emailVerified}>პროფილი</ProfileLink>
                        <LogOut onClick={props.logOut.bind(this)}>
                            გამოსვლა</LogOut>
                    </DropdownContent> : null}

            </DropdownMenu>

        </LoggedInBox>
    )
}
export const LoggedInBox = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-around;
    svg{
        font-size: 1.5rem;
    }
    @media (max-width: 900px){
        flex: 1;
        margin: 1.5rem 0;
        width: 100%;
    }
`
export const LoggedOutBox = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const LogOut = styled.button`
    border: none;
    outline: none;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover{
        color: #3a5685;
    }
`
export const LoginLink = styled(Link)`
    font-size: 0.9rem;
    text-decoration: none;
    color: #4d4646;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        text-decoration: none;
        color: #000;
    }
`
export const Icon = styled.i`
   font-size: 1.1rem;
   margin-right: 0.2rem;
   vertical-align: middle;
   opacity: 0.8;
   
`

export const AddProduct = styled(LoginLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4d4646;

`
export const DropdownMenu = styled.div`
    position: relative;
    display: inline-block;
    
`
export const DropdownContent = styled.div`
    position: absolute;
    padding: 0.5rem;
    background: #f0f0e9;  
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 0.225em;
    text-align: center;
    z-index: 43;
`
export const UserName = styled.button`
    border: none;
    background: #77bd8f;
    color: #4d4646;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    outline: none;
    svg{
        font-size: 1.4rem;
    }
    &::before{
        content: '';
        position: absolute;
        top: 5%;
        right: 33%;
        width: 5px;
        height: 5px;
        background: red;
        border-radius: 50%;
        display: ${props => !props.shownotification ? 'block' : 'none'}
    }
    &:hover{
       color: #000;
       outline: none;
    }

`
export const ProfileLink = styled(Link)`
    color: #000;
    font-size: 0.9rem;
    position: relative;
    text-decoration: none;
    &::before{
        content: '';
        position: absolute;
        top: 2%;
        right: -10%;
        width: 5px;
        height: 5px;
        background: red;
        border-radius: 50%;
        display: ${props => !props.shownotification ? 'block' : 'none'}
    }
    &:hover{
        color: #3a5685;
    }

`

export default connect(null, { logOut })(LoggedIn);
