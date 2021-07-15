import React from 'react'
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { FormElement, FormHeading, TextArea, ProductForm, SubmitButton } from './NewProductStyles'


function ProductInfo(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        props.setData(data)
        props.history.push('./result')
    };
    return (
        <ProductForm onSubmit={handleSubmit(onSubmit)}>
            <FormHeading>ინფორმაცია პროდუქტზე</FormHeading>
            <FormElement>
                <label htmlFor='description'>პროდუქტის აღწერა</label>
                <TextArea {...register("description", {
                    required: {
                        value: true,
                        message: 'ველი აუცილებელია!'
                    }, maxLength: {
                        value: 200,
                        message: 'შეიყვანეთ მაქსიმუმ 200 სიმბოლო'
                    }
                })} />
                {errors.description && <p>{errors.description.message}</p>}
            </FormElement>
            <FormElement>
                <SubmitButton type="submit">შემდეგი</SubmitButton>
            </FormElement>

        </ProductForm>
    )
    { /*return (
        
        <Container>
            <FormElement>
                <label htmlFor={"condition"}>მიუთითეთ პროდუქტის მდგომარეობა</label>
                <ConditionField name="contition" component="select">
                    <option></option>
                    <option value="new">ახალი</option>
                    <option value="used">მეორადი</option>
                </ConditionField>
            </FormElement>
            <FormElement>
                <label htmlFor={"productTittle"}>მიუთითეთ პროდუქტის აღწერა</label>
                <Field placeholder={"პროდუქტის აღწერა..."} name="descrition"
                    component={"textarea"} type="text" />
            </FormElement>
            {props.errorMessage && <span>{props.errorMessage}</span>}
            <FormButton>
                <PreviusPage onClick={props.onPreviusPage}><i className="fas fa-arrow-left"></i>უკან</PreviusPage>
                <button type='submit'>დამატება</button>
            </FormButton>
        </Container>
   )*/}
}

export default withRouter(ProductInfo)
