import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { ProductForm, FormElement, TextInput, Select, SubmitButton } from '../NewProductStyles'

function DesktopPCSpec() {
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
                <label htmlFor='proccesor-type'>პროცესორის ტიპი</label>
                <TextInput {...register('პროცესორის ტიპი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='text' placeholder='ტიპი...' id='proccesor-type' />
            </FormElement>
            <FormElement>
                <label htmlFor='ram-type'>ოპერატიულის ტიპი</label>
                <TextInput {...register('ოპერატიულის ტიპი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='text' placeholder='ტიპი...' id='ram-type' />
            </FormElement>
            <FormElement>
                <label htmlFor='ram'>ოპერატიული მეხსიერება</label>
                <TextInput {...register('ოპერატიული მეხსიერება(RAM)', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='number' placeholder='RAM...' id='ram' />
            </FormElement>
            <FormElement>
                <label htmlFor='hdd'>HDD მოცულობა</label>
                <TextInput {...register('HDD მოცულობა', {
                    required: {
                        value: false,
                        message: requiredMessage
                    }
                })} type='number' placeholder='HDD...' id='hdd' />
            </FormElement>
            <FormElement>
                <label htmlFor='ssd'>SSD მოცულობა</label>
                <TextInput {...register('SSD მოცულობა', {
                    required: {
                        value: false,
                        message: requiredMessage
                    }
                })} type='number' placeholder='SSD...' id='ssd' />
            </FormElement>
            <FormElement>
                <label htmlFor='video-card'>ვიდეო ბარათი</label>
                <TextInput {...register('ვიდეო ბარათი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='text' placeholder='ვიდეო ბარათი...' id='video-card' />
            </FormElement>
            <FormElement>
                <label htmlFor='cd-dvd-reader'>CD/DVD წამკითხველი</label>
                <Select {...register('CD/DVD წამკითხველი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} id='cd-dvd-reader'>
                    <option></option>
                    <option value='კი'>კი</option>
                    <option value='არა'>არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='os'>ოპერაციული სისტემა</label>
                <TextInput {...register('ოპერაციული სისტემა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='text' placeholder='ვიდეო ბარათი...' id='os' />
            </FormElement>
        </ProductForm>
    )
}

export default withRouter(DesktopPCSpec)
