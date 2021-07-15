import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { Select, SubmitButton, FormElement, ProductForm } from '../NewProductStyles';

function VideoSpecifications(props) {
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
                <label htmlFor='changer'>Changer</label>
                <Select {...register('changer', {
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
                <label htmlFor='karaoke'>Karaoke</label>
                <Select {...register('კარაოკე', {
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
                <label htmlFor='recorder'>Recorder</label>
                <Select {...register('ჩამწერი', {
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
                <label htmlFor='screen'>With Screen</label>
                <Select {...register('ეკრანით', {
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
                <SubmitButton>შემდეგი</SubmitButton>
            </FormElement>
        </ProductForm>

    )
}

export default withRouter(VideoSpecifications)
