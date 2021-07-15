import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { ProductForm, FormElement, Select, SubmitButton } from '../NewProductStyles'

function HeadphoneSpec(props) {
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
                <label htmlFor='microphone'>მიკროფონი</label>
                <Select {...register('მიკროფონი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} >
                    <option></option>
                    <option value="დიახ">დიახ</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='wireless'>უსადენო</label>
                <Select {...register('უსადენო', {
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

export default withRouter(HeadphoneSpec)
