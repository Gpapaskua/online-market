
import styled from 'styled-components'

export const SignUpPage = styled.div`
   
    display: grid;
    justify-content: center;
    div{
        width: 90%;
        margin: 0 auto;
        background: red;
    }
    @media (max-width: 768px) {
    width: 90%;
    height: 70vh;

  }
`
export const SignUpFormBox = styled.form`
 width: 50%;
    min-height: 70vh;
    margin: 2rem auto;
    background: #ccc;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div{
        width: 90%;
        display: flex;
        justify-content: center;
    }
    span{
        font-size: 0.8rem;
        color: red;
    }
    @media screen and (max-width: 700px){
        width: 90%;
    }
`
export const UsernameField = styled.input`
    border:none;
    color: #ccc;
    outline: none;
    width: 40%;
    padding: 1rem 1rem;
    border-radius: 0.6rem;
    &:focus{
        border: 2px solid #000;
    }
`
export const EmailField = styled(UsernameField)``
export const PasswordField = styled(UsernameField)``
export const SignUpButton = styled.button`
    border: none;
    outline: none;
    width: 40%;
    padding: 1rem 0rem;
    border-radius: 0.4rem;
    background: #ffff00;
`