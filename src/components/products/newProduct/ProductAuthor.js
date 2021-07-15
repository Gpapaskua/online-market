import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { withRouter } from 'react-router-dom'
import { ProductForm, SubmitButton, TextInput, FormElement, Warning, UserPhoneInput } from './NewProductStyles'
import 'react-phone-input-2/lib/style.css'

function ProductAuthor(props) {
    const [phoneNumber, setPhoneNumber] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.setData(data);
        props.history.push('newproduct/step2')

    };


    return (
        <ProductForm onSubmit={handleSubmit(onSubmit)}>

            <FormElement>
                <label htmlFor='location'>ადგილმდებარეობა</label>
                <TextInput {...register("location", {
                    required: {
                        value: true,
                        message: 'ველი აუცილებელია!'
                    }, maxLength: {
                        value: 20,
                        message: 'შეიყვანეთ მაქსიმუმ 20 სიმბოლო'
                    }
                })} type='text' id='author' placeholder='ქალაქი...' showoutline={errors.location} />
                {errors.location && <Warning>{errors.location.message}</Warning>}
            </FormElement>
            <FormElement>
                <label htmlFor='phone'>ტელეფონის ნომერი</label>
                <TextInput id='phone'{...register('phone', {
                    required: true, maxLength: 9, max: 9

                })} />

                {errors.phone && errors.phone.type === 'max' && <Warning>მაქსიმუმ 9 სიმბოლო</Warning>}
            </FormElement>
            <FormElement>
                <SubmitButton type="submit">შემდეგი</SubmitButton>
            </FormElement>

        </ProductForm>
    )
}

export default withRouter(ProductAuthor)
