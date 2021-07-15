import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Modal, InputField, SignInButton } from './Login'

function ResetPasswordModal(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <Modal show={props.showModal} onSubmit={handleSubmit(props.onSendHandler)} onClick={(e) => e.stopPropagation()}>

            <ResetInfo>პაროლის აღსადგენად თქვენ მიიღებთ წერილს იმეილზე.</ResetInfo>
            <InputField {...register('email', {
                required: {
                    value: true,
                    message: 'შეიყვანეთ თქვენი იმეილი!'
                }
            })} type='email' placeholder='იმეილი' />
            {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email.message}</span>}
            <SignInButton type='submit'>გაგზავნა</SignInButton>
            {props.passwordReset && <span style={{ color: '#52494a', fontSize: '0.9rem' }}>{props.passwordReset}</span>}
        </Modal>
    )
}
export const ResetInfo = styled.p`
    margin: 0.5rem;
    font-size: 0.9rem;
    color: #52494a;
`
export default ResetPasswordModal
