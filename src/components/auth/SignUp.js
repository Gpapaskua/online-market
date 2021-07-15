import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import { signUp, setLoading, setError } from '../../redux/authReducer'
import { InputField } from './Login'
import { SignUpFormBox, SignUpButton } from './SignUpStyles'

function SignUp(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (formData) => {
        if (formData.password !== formData.confirmPassword) {
            return props.setError('პაროლები არ ემთხვევა ერთმანეთს')
        }
        if (formData.password.length < 6) {
            return props.setError('პაროლები უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან')
        }
        props.setError('');
        props.signUp(formData)
    }
    if (props.user) {
        return <Redirect to='/' />
    }
    return (

        <SignUpFormBox onSubmit={handleSubmit(onSubmit)}>
            <InputField  {...register('email', {
                required: {
                    value: true,
                    message: 'შეიყვანეთ თქვენი იმეილი!'
                }
            })} placeholder={"ელ.ფოსტა..."} name="email"
                type="email" />
            {errors.email && <span>{errors.email.message}</span>}
            <InputField  {...register('name', {
                required: {
                    value: true,
                    maxLength: 12,
                    message: 'შეიყვანეთ თქვენი სახელი!'
                }
            })} placeholder={"სახელი..."} name="name"
                type="text" />
            {errors.name && <span>{errors.name.message}</span>}
            <InputField  {...register('password', {
                required: {
                    value: true,
                    message: 'შეიყვანეთ პაროლი!'
                }
            })} placeholder={"პაროლი..."}
                type="password" />
            {errors.password && <span>{errors.password.message}</span>}
            <InputField  {...register('confirmPassword', {
                required: {
                    value: true,
                    message: 'დაადასტურეთ პაროლი!'
                }
            })} placeholder={"გაიმეორეთ პაროლი..."}
                type="password" />

            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            <div>
                <SignUpButton type='submit'>რეგისტრაცია</SignUpButton>
            </div>
        </SignUpFormBox>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, { setError, setLoading, signUp })(SignUp)
