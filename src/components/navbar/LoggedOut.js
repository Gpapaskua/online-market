import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { RiAddCircleFill } from 'react-icons/ri'
import styled from 'styled-components'
import { LoggedOutBox, LoginLink, AddProduct } from './LoggedIn'

function LoggedOut() {
    return (
        <LoggedOutBox>
            <LoginLink to="/login"><LoginIcon />
                შესვლა</LoginLink>
            <AddProduct to="/newproduct">
                <AddIcon />
                დაამატე</AddProduct>
        </LoggedOutBox>
    )
}

const LoginIcon = styled(FiLogIn)`
    font-size: 1.5rem;
    
`
const AddIcon = styled(RiAddCircleFill)`
    font-size: 1.5rem;
    
`

export default LoggedOut
