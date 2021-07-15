import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { ProductForm, FormElement, TextInput, Select, SubmitButton } from '../NewProductStyles'

function LaptopSpec(props) {
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
                <label htmlFor='brand'>ბრენდი</label>
                <TextInput {...register('ბრენდი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='text' placeholder='ბრენდი...' id='brand' />
            </FormElement>
            <FormElement>
                <label htmlFor='resolution'>რეზოლუცია</label>
                <Select {...register('რეზოლუცია', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} id='resolution'>
                    <option></option>
                    <option value='1280 x 1024'>1280 x 1024</option>
                    <option value='1366 x 768'>1366 x 768</option>
                    <option value='1600 x 900'>1600 x 900</option>
                    <option value='1920 x 1080'>1920 x 1080</option>
                    <option value='1920 x 1200'>1920 x 1200</option>
                    <option value='2560 x 1440'>2560 x 1440</option>
                    <option value='3440 x 1440'>3440 x 1440</option>
                    <option value='3840 x 2160'>3840 x 2160</option>
                </Select>
            </FormElement>
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
                <label htmlFor='screenSize'>ეკრანის ზომა</label>
                <TextInput {...register('ეკრანის ზომა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='number' placeholder='ინჩი...' id='screenSize' />
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
                <label htmlFor='os'>ოპერაციული სისტემა</label>
                <TextInput {...register('ოპერაციული სისტემა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} type='text' placeholder='ოპერაციული სისტემა...' id='os' />
            </FormElement>
            <FormElement>
                <label htmlFor='optical-disc'>ოპტიკური დისკი</label>
                <Select {...register('ოპტიკური დისკი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} id='optical-disc'>
                    <option></option>
                    <option value='კი'>კი</option>
                    <option value='არა'>არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <SubmitButton>შემდეგი</SubmitButton>
            </FormElement>
        </ProductForm>
    )
}

export default withRouter(LaptopSpec)
