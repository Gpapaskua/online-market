import React from 'react'
import styled from 'styled-components'


function SpecificationDetails(props) {
    const field = props.field
    return (
        <SpecElement>
            <span>{field}</span>
            <span>{props.spec[field]}</span>
        </SpecElement>
    )
}
const SpecElement = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    position: relative;
    &::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: #d3dbd7;
        position: absolute;
        bottom: -20%;
    }
    @media screen  and (max-width: 700px){
        width: 100%;
        font-size: 0.8rem;

    }
`

export default SpecificationDetails
