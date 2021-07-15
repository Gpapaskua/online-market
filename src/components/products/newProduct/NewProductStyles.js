import PhoneInput from 'react-phone-input-2'
import styled from 'styled-components'


export const NewProductPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const ProductForm = styled.form`
    margin: 2.5rem auto;
    width: 50%;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.4rem;
    background: #f0f0e9;
    @media (max-width: 700px){
        width: 90%;
        
    }
`
export const Container = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const FormElement = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    position: relative;

    label{
        color: #4d4d4d;
        margin: 0.5rem 0;
    }
   
   
`
export const FormHeading = styled.h4`
    font-size: 1.4rem;
    margin: 1rem;
    font-weight: 400;
    color: #2b1313;
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 15rem;
    border-radius: 0.3rem;
    outline: none;
    &:focus{
        border: 2px solid #2b1313;
        
    }
`
export const TextInput = styled.input`
    color: #000;
    width: 60%;
    padding: 0.7rem 0.5rem;
    border: ${props => props.showoutline ? '2px solid red' : 'none'};
    outline: none;
    background: #fff;
    border-radius: 0.3rem;
    font-size: 1.1rem;
    
`
export const Select = styled.select`
    width: 60%;
    padding: 0.5rem;
    border: ${props => props.showoutline ? '2px solid red' : 'none'};
    border-radius: 0.4rem;
    background: #fff;
    color: #000;
    outline: none;
    font-size: 1rem;
    overflow: hidden;
    option{
        padding: 0.5rem;
        color: #b3aea2;
        font-size: 1rem;
        overflow: hidden;
    }
`

export const CategoryField = styled(TextInput)`
    option{
        font-size: 0.85rem;
        color: #000;
        background: #fff;
    }
`
export const ConditionField = styled(CategoryField)`

`

export const SubmitButton = styled.button`
        width: 50%;
        padding: 0.7rem 0.5rem;
        outline: none;
        border: none;
        background: #B9C114;
        border-radius: 0.6rem;
        color: #000;
        font-size: 1rem;
        letter-spacing: 0.05rem;
        cursor: pointer;
`
export const Warning = styled.p`
    font-size: 0.8rem;
    color: red;
    position: absolute;
    bottom: -50%;
    
`
export const UserPhoneInput = styled(PhoneInput)`
  
`