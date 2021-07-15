import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { ProductForm, FormElement, TextInput, Select, SubmitButton } from '../NewProductStyles'


function MobileSpecifications(props) {
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
                })} placeholder={"ბრენდი..."}
                    type="text" id='brand' />
            </FormElement>
            <FormElement>
                <label htmlFor='year'>გამოშვების წელი</label>
                <TextInput {...register('გამოშვების წელი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"წელი..."} type="number" id='year' />
            </FormElement>
            <FormElement>
                <label htmlFor='cameras'>კამერის რაოდენობა</label>
                <TextInput {...register('კამერის რაოდენობა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"რაოდენობა..."} type="number" id='cameras' />
            </FormElement>
            <FormElement>
                <label htmlFor='selfie'>Selfie კამერა</label>
                <TextInput {...register('Selfie კამერა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"რაოდენობა..."}
                    type="number" id='selfie' />
            </FormElement>
            <FormElement>
                <label htmlFor='3G'>3G ქსელი</label>
                <Select {...register('3G', {
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
                <label htmlFor='4G'>LTE (4G) ქსელი</label>
                <Select {...register('4G', {
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
                <label htmlFor='5G'>5G ქსელი</label>
                <Select {...register('5G', {
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
                <label htmlFor='simcards'>SIM ბარათების რაოდენობა</label>
                <TextInput {...register('SIM ბარათების რაოდენობა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"რაოდენობა..."} type="number" id='simcards' />
            </FormElement>
            <FormElement>
                <label htmlFor={'simcardSize'}>SIM ბარათის ზომა</label>
                <Select {...register('SIM ბარათის ზომა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} id="simcardSize">
                    <option></option>
                    <option value="nano">Nano-Sim</option>
                    <option value="standard">Standard-Sim</option>
                    <option value="micro">Micro-Sim</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='OS'>ოპერაციული სისტემა</label>
                <Select {...register('OS', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}           >
                    <option></option>
                    <option value="android">Android</option>
                    <option value="ios">IOS</option>
                    <option value="windows">Windows</option>
                    <option value="symbian">Symbian</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='osVersion'>OS ვერსია</label>
                <TextInput {...register('OS ვერსია', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"ვერსია..."} type="text" id='osVersion' />
            </FormElement>
            <FormElement>
                <label htmlFor='ram'>ოპერატიული მეხსიერება</label>
                <TextInput {...register('RAM', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"მეხსიერება..."} type="number" id='ram' />
            </FormElement>
            <FormElement>
                <label htmlFor='internalStorage'>შიდა მეხსიერება</label>
                <TextInput {...register('შიდა მეხსიერება', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"შიდა მეხსიერება..."}
                    type="number" id='internalStorage' />
            </FormElement>
            <FormElement>
                <label htmlFor='slot'>ბარათის სლოტი</label>
                <Select {...register('ბარათის სლოტი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} id='slot' >
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
                })} placeholder={"ზომა..."} type="number" id='screenSize' />
            </FormElement>
            <FormElement>
                <label htmlFor='display'>ეკრანის ტიპი</label>
                <Select {...register('ეკრანის ტიპი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} id='display'>
                    <option></option>
                    <option value="LCD">LCD</option>
                    <option value="OLED">OLED</option>
                    <option value="AMOLED">AMOLED</option>
                    <option value="SuperAmoled">Super Amoled</option>
                    <option value="TFT">TFT</option>
                    <option value="IPS">IPS</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='touch'>სენსორული ეკრანი</label>
                <Select {...register('სენსორული ეკრანი', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}              >
                    <option></option>
                    <option value="დიახ">კი</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='primaryCamera'>ძირითადი კამერა</label>
                <TextInput {...register('ძირითადი კამერა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"კამერა..."}
                    type="number" />
            </FormElement>
            <FormElement>
                <label htmlFor='wifi'>Wi-Fi</label>
                <Select {...register('Wi-Fi', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}             >
                    <option></option>
                    <option value="დიახ">კი</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='gps'>GPS</label>
                <Select {...register('GPS', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}            >
                    <option></option>
                    <option value="დიახ">კი</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='nfc'>NFC</label>
                <Select {...register('NFC', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })}>
                    <option></option>
                    <option value="დიახ">კი</option>
                    <option value="არა">არა</option>
                </Select>
            </FormElement>
            <FormElement>
                <label htmlFor='battery'>ელემენტის მოცულობა</label>
                <TextInput {...register('ელემენტის მოცულობა', {
                    required: {
                        value: true,
                        message: requiredMessage
                    }
                })} placeholder={"ელემენტი..."} type="number" />
            </FormElement>
            <FormElement>
                <SubmitButton type='submit'>შემდეგი</SubmitButton>
            </FormElement>

        </ProductForm>

    )
}

export default withRouter(MobileSpecifications)
