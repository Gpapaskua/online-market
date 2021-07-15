import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, withRouter, Link } from 'react-router-dom';
import { Warning, FormElement, FormButton, Select, ProductForm, PreviusPage, TextInput, SubmitButton } from './NewProductStyles'
import { IoMdArrowBack } from 'react-icons/io';

function ProductCategory(props) {
    const [category, setCategory] = useState('')
    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.setCategory(category)
        props.setData(data)
        props.history.push('./step3')
    };
    return (
        <ProductForm onSubmit={handleSubmit(onSubmit)}>
            <FormElement>
                <label htmlFor='tittle'>დასახელება</label>
                <TextInput id='tittle' {...register("tittle", {
                    required: {
                        value: true,
                        message: 'ველი აუცილებელია!'
                    }, maxLength: {
                        value: 20,
                        message: 'შეიყვანეთ მაქსიმუმ 20 სიმბოლო' // JS only: <p>error message</p> TS only support string
                    }
                })} type='text' placeholder='დასახელება...' showoutline={errors.tittle} />
                {errors.tittle && <Warning>{errors.tittle.message}</Warning>}
            </FormElement>
            <FormElement>
                <label htmlFor='price'>ფასი</label>
                <TextInput id='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'ველი აუცილებელია'
                    },
                    min: {
                        value: 0,
                        message: 'ფასი უნდა აღემატებოდეს ნულს!'
                    }
                })} placeholder={"ფასი..."}
                    type="number" showoutline={errors.price}
                />
                {errors.price && <Warning>{errors.price.message}</Warning>}
            </FormElement>
            <FormElement>
                <label htmlFor='category'>აირჩიეთ კატეგორია</label>
                <Select id='category' {...register('category', {
                    required: {
                        value: true,
                        message: 'ველი აუცილებელია'
                    }
                })} placeholder={"კატეგორია..."} onChange={onCategoryChange} showoutline={errors.category}>

                    <option></option>
                    <option value="mobile">მობილური ტელეფონი</option>
                    <option value="desktopPC">პერსონალური კომპიუტერი</option>
                    <option value="computer-parts">კომპიუტერის ნაწილები</option>
                    <option value="laptops">ლეპტოპი</option>
                    <option value="tv">ტელევიზორი</option>
                    <option value="video">DVD და ვიდეოტექნიკა</option>
                    <option value="photo-cameras">ფოტოკამერები</option>
                    <option value="headphones">ყურსასმენები</option>
                    <option value="mp3-players">MP3 პლეერი</option>
                    <option value="music-technic">მუსიკალური ტექნიკა</option>
                    <option value="smart-watches">სმარტ საათი</option>
                    <option value="loud-speakers">მუსიკალური ტექნიკა</option>
                    <option value="drones">დრონი</option>
                    <option value="home-technic">საოჯახო ტექნიკა</option>
                    <option value="memory-cards">მეხსიერების ბარათები</option>
                    <option value="tv-equipment">ტელევიზორის ნაწილები/აქსესუარები</option>

                </Select >
                {errors.category && <Warning>{errors.category.message}</Warning>}
            </FormElement>
            <FormElement>
                <SubmitButton type="submit">შემდეგი</SubmitButton>
            </FormElement>

        </ProductForm>
    )

    {/*return (
        <Container>
            <FormElement>
                <label htmlFor={"productTittle"}>მიუთითეთ პროდუქტის დასახელება</label>
                <TittleField placeholder={"პროდუქტის დასახელება..."} name="tittle"
                    component={"input"} type="text" />
            </FormElement>
            <FormElement>
                <label htmlFor={"category"}>მიუთითეთ პროდუქტის კატეგორია</label>
                <CategoryField name="category" component="select" onChange={onCategoryChange}>
                    <option></option>
                    <option value="mobile">მობილური ტელეფონი</option>
                    <option value="desktopPC">პერსონალური კომპიუტერი</option>
                    <option value="leptop">ლეპტოპი</option>
                    <option value="tv">ტელევიზორი</option>
                    <option value="video">DVD და ვიდეოტექნიკა</option>
                    <option value="photocamera">ფოტოკამერები</option>
                    <option value="headphones">ყურსასმენები</option>
                    <option value="mp3-players">მუსიკალური ტექნიკა</option>
                </CategoryField>
            </FormElement>
            <Specifications category={category} resetSection={props.resetSection} />
            <FormButton>
                <PreviusPage onClick={props.onPreviusPage}><i className="fas fa-arrow-left"></i>უკან</PreviusPage>
                <button type='button' onClick={props.onNextPage}>შემდეგი</button>
            </FormButton>
        </Container>
    )*/}
}

export default withRouter(ProductCategory)
