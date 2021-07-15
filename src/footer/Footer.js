import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterBox>
            <p>Copyright &copy; 2021</p>
        </FooterBox>
    )
}
const FooterBox = styled.footer`
	width: 100%;
	background-color: #fff;
	color: #000;
	display: flex;
    justify-content: center;
    align-items: flex-end;

`

export default Footer
