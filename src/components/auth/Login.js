import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { sendPasswordResetEmail, signIn, signInWithGoogle } from '../../redux/authReducer'
import googleLogo from '../../assets/img/google.png'
import { useForm } from 'react-hook-form'
import ResetPasswordModal from './ResetPasswordModal'
function Login(props) {
    const [showModal, setShowModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { errorMessage } = props
    const onSignInSubmit = ({ email, password }) => {
        props.signIn(email, password)
    }
    const onSignInWithGoogle = () => {
        props.signInWithGoogle()
    }
    const onPasswordReset = () => {
        setShowModal(true)
    }
    const onSendHandler = ({ email }) => {
        props.sendPasswordResetEmail(email)
        setTimeout(function () { setShowModal(false) }, 3000);
    }
    if (props.isLogged) {
        return (
            <Redirect to="/" />
        )
    }
    return (
        <LoginPage>
            <ResetPassword show={showModal} onClick={() => setShowModal(false)}>
                <ResetPasswordModal showModal={showModal} passwordReset={props.passwordReset} onSendHandler={onSendHandler} />
            </ResetPassword>
            <RegistrationBox>
                <RegistrationInfo>იმისათვის, რომ მიიღოთ საიტის ყველა სერვისზე წვდომა, გაიარეთ მარტივი რეგისტრაცია.</RegistrationInfo>
                <RegisterButton to="/signup">რეგისტრაცია</RegisterButton>
            </RegistrationBox>
            <LoginFormBox onSubmit={handleSubmit(onSignInSubmit)}>

                <InputField  {...register('email', {
                    required: {
                        value: true,
                        message: 'შეიყვანეთ თქვენი იმეილი!'
                    }
                })} placeholder={"ელ.ფოსტა..."} name="email"
                    type="email" />


                <InputField  {...register('password', {
                    required: {
                        value: true,
                        message: 'შეიყვანეთ თქვენი იმეილი!'
                    }
                })} placeholder={"პაროლი..."}
                    type="password" />
                <ForgotPassword type='button' onClick={onPasswordReset}>დაგავიწყდათ პაროლი?</ForgotPassword>
                <Google onClick={onSignInWithGoogle}>
                    <img src={googleLogo} />
                </Google>

                <SignInButton type='submit'>შესვლა</SignInButton>
                {
                    props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
            </LoginFormBox>

        </LoginPage>
    )
}


const LoginPage = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    margin: 2rem auto;
    border-radius: 0.5rem;
    @media (max-width: 900px) {
    flex-direction: column;
    width: 80%;
    height: 100vh;
    background: red;
  }
`
export const ResetPassword = styled.div`
    position: fixed;
    display: block;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    overflow-x: hidden;
    background-color: rgba(31, 32, 41, .75);
    pointer-events: ${props => props.show ? 'auto' : 'none'};
    opacity: ${props => props.show ? '1' : '0'};
    transition: ${props => props.show ? 'all 300ms ease-in-out' : 'opacity 250ms 700ms ease'} ;
`
export const Modal = styled.form`
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40%;
    width: 40%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    padding-bottom: 20px;
    background-color: #f0f0e9;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199, 175, 189, .25);
    opacity:  ${props => props.show ? '1' : '0'};
    transform:  ${props => props.show ? 'scale(1)' : 'scale(0)'};
    transition:  ${props => props.show ? 'opacity 250ms 500ms ease, transform 350ms 500ms ease' :
        'opacity 250ms 250ms ease, transform 300ms 250ms ease'};
`
const RegistrationBox = styled.div`
    flex: 0.5;
    position: relative;
    background: #34313a;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom-left-radius: 0.4rem;
    border-top-left-radius: 0.4rem;
    @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.4rem;

  }
    
`
const RegistrationInfo = styled.p`
    font-size: 0.8rem;
    color: #ccc;
`
const LoginFormBox = styled.form`
    flex: 0.5;
    min-height: 70vh;
    background: #f0f0e9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom-right-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    @media (max-width: 900px) {
    width: 100%;
    height: 60vh;
    border-bottom-right-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`
const RegisterButton = styled(Link)`
    margin-top: 1rem;
    background: #f0f0e9;
    color: #000;
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    text-decoration: none;
`
export const InputField = styled.input`
    border: none;
    width: 60%;
    padding: 1rem 0.8rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    background: #fff;
    outline: none;
    &:focus{
        border: 1px solid #000;
    }
`
export const SignInButton = styled.button`
    border: none;
    background: #ffff00;
    width: 50%;
    padding: 0.8rem 0;
    border-radius: 0.6rem;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`
const Google = styled.div`
    width: 40px;
    cursor: pointer;
    img {
        width: 100%;
    }
`
const ErrorMessage = styled.span`
    font-size: 0.8rem;
    color: red;
   
    
`
const ForgotPassword = styled.button`
    border: none;
    cursor: pointer;
    color: #fa1e30;
`
const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        errorMessage: state.auth.error,
        passwordReset: state.auth.passwordReset
    }
}

export default connect(mapStateToProps, { signIn, signInWithGoogle, sendPasswordResetEmail })(Login)
