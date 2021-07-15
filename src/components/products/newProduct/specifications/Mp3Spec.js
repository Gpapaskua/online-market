import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { ProductForm, FormElement, Select, SubmitButton } from '../NewProductStyles'

function Mp3Spec(props) {
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
                <label htmlFor='FM radio'>FM რადიო</label>
                <Select {...register('FM radio', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}>
                    <option></option>
                    <option value="დაიხ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='camera'>კამერა</label>
                <Select {...register('კამერა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='screen'>ეკრანი</label>
                <Select {...register('ეკრანი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='Integrated Speakers'>მიკროფონი</label>
                <Select {...register('ინტეგრირებული მიკროფონი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='Touch Screen'>სენსორული ეკრანი</label>
                <Select {...register('სენსორული ეკრანი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='Headphone'>ყურსასმენი</label>
                <Select {...register('ყურსასმენებით', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='Memory Card'>მეხსიერების ბარათი</label>
                <Select {...register('მეხსიერების ბარათი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <SubmitButton type='submit'>შემდეგი</SubmitButton>
            </FormElement>
        </ProductForm>
    )
}

export default withRouter(Mp3Spec)
