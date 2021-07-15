import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { TextInput, Select, SubmitButton, FormElement, ProductForm } from '../NewProductStyles';


function TvSpecifications(props) {
    const requiredMessage = 'ველი აუცილებელია'
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.setSpecifications(data)
        props.history.push('./step4')
    };
    return (
        <ProductForm onSubmit={handleSubmit(onSubmit)}>
            <h4>ძირითადი მახასიათებლები</h4>
            <FormElement>
                <label htmlFor='smart'>SMART TV</label>
                <Select {...register('SMART TV', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}>
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='year'>გამოშვების წელი</label>
                <TextInput {...register('გამოშვების წელი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='number' placeholder='წელი' />

            </FormElement>
            <FormElement>
                <label htmlFor='3D'>3D</label>
                <Select {...register('3D', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}>
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='screenSize'>ეკრანის ზომა</label>
                <TextInput {...register('ეკრანის ზომა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='number' placeholder='წელი' />

            </FormElement>
            <FormElement>
                <label htmlFor='screenType'>ეკრანის ტიპი</label>
                <Select {...register('ეკრანის ტიპი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}>
                    <option></option>
                    <option value="LCD">LCD</option>
                    <option value="OLED">OLED</option>
                    <option value="PMOLED">PMOLED</option>
                    <option value="AMOLED">PMOLED</option>
                    <option value="PLASMA">PLASMA</option>
                    <option value="CRT">CRT</option>
                    <option value="LED">LED</option>
                    <option value="WLCD">WLCD</option>
                    <option value="OLCD">OLCD</option>
                    <option value="DIRECT">DIRECT</option>
                </Select>
            </FormElement>
            <FormElement>
                <SubmitButton>შემდეგი</SubmitButton>
            </FormElement>

        </ProductForm>

    )
}
export default withRouter(TvSpecifications)
