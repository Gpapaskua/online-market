import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

function AddResult(props) {
    const { data } = props
    const [disable, setDisable] = useState(false)
    const onAddClickHandler = () => {
        setDisable(true)
        props.addNewProduct(data)
        setTimeout(function () { props.history.push('/') }, 3000);
    }
    return (
        <AddProduct>
            <p>
                განცხადების ფორმა შევსებულია. შეგიძლიათ დაამატოთ პროდუქტი.
            </p>
            <button onClick={onAddClickHandler} disabled={disable}>დამატება</button>
            {props.addSuccess && <span>პროდუქტი დაემატა</span>}
            {props.error && <span>{props.error}</span>}
        </AddProduct>
    )
}

const AddProduct = styled.div`
    width: 50%;
    min-height: 50vh;
    background: #f0f0e9;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p{
        font-size: 1.1rem;
        color: #727873;
    }
    button{
        border: none;
        background: #32a852;
        font-size: 1rem;
        padding: 0.8rem 2.5rem;
        border-radius: 0.4rem;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }
`
export default AddResult
