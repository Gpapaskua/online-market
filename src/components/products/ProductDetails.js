import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UploadImages from './newProduct/UploadImages'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SpecificationDetails from './SpecificationDetails'
import user from '../../assets/img/user.png'
import noImage from '../../assets/img/no-image.png'
import { ImPriceTag } from 'react-icons/im'
import { GoLocation } from 'react-icons/go'
import { SiGooglecalendar } from 'react-icons/si'
import { FcPhone } from 'react-icons/fc'
import { useHistory } from 'react-router-dom';

function ProductDetails({ prod, allowEdit }) {

    const [fields, setFields] = useState(null)
    const [images, setImages] = useState([])
    const productId = prod.id
    const history = useHistory()
    const category = prod.data.category
    const [showModal, setShowModal] = useState(false)
    const onUserClick = () => {
        history.push(`../../user/${prod.uid}`)
    }
    useEffect(() => {
        if (prod.data.specifications) {
            setFields(Object.keys(prod.data.specifications))
        }
        setImages(prod.images)
    }, [prod.images])
    return (
        <ProductDetailsPage>

            <Details>

                <Images>
                    <div>
                        {allowEdit && <AddImages style={{ textAlign: 'center' }} onClick={() => setShowModal(true)}>სურათების დამატება</AddImages>}
                        <ImageModal show={showModal}>
                            <UploadImages show={showModal} setShowModal={setShowModal}
                                currentImagesCount={prod.images ? prod.images.length : 0} productId={productId}
                                category={category} />
                        </ImageModal>
                    </div>
                    {images ?
                        <ImageCarousel swipeable={true}>
                            {
                                images.map((image, index) => {
                                    return <Image key={index}>
                                        <img src={image.url} alt={'product image'} />
                                    </Image>

                                })
                            }
                        </ImageCarousel>
                        : <Image>
                            <img src={noImage} />
                        </Image>
                    }
                </Images>
                <Info>

                    <InfoElement><h1>{prod.data.tittle}</h1></InfoElement>
                    <InfoElement>
                        <SiGooglecalendar />
                        <h2>{prod.created.toDate().toLocaleDateString()}</h2>
                    </InfoElement>
                    <InfoElement>
                        <ImPriceTag />
                        <h2>{prod.data.price}₾</h2
                        ></InfoElement>
                    <InfoElement>
                        <GoLocation />
                        <h2>{prod.data.location}</h2>
                    </InfoElement>
                    <InfoElement>
                        <FcPhone />
                        <h2>{prod.data.phone}</h2>
                    </InfoElement>


                </Info>
            </Details>
            <UserImage onClick={onUserClick}>
                <img src={user} alt='user' />
                <h2>{prod.author}</h2>
            </UserImage>
            <Desctiption>
                <p>{prod.data.description}</p>
            </Desctiption>
            <ProductInfo>

                {
                    fields && fields.map((field, index) => {
                        return <SpecificationDetails field={field} spec={prod.data.specifications} key={index} />
                    })
                }
            </ProductInfo>


        </ProductDetailsPage>
    )
}

const ProductDetailsPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`
const ImageModal = styled.div`
     position: fixed;
    display: block;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    overflow-x: hidden;
    background-color: rgba(31, 32, 41, .75);
    pointer-events: ${props => props.show ? 'auto' : 'none'};
    opacity: ${props => props.show ? '1' : '0'};
    transition: ${props => props.show ? 'all 300ms ease-in-out' : 'opacity 250ms 700ms ease'} ;
`
const Details = styled.div`
    display: flex;
    width: 100%;
    min-height: 60vh;
    background: #fff;
    justify-content: space-around;
    @media screen  and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
    
`
const ImageCarousel = styled(Carousel)`
    padding: 0.5rem;
    background: #fff;
`
const Desctiption = styled.div`
   width: 70%;
   display: flex;
   justify-content: center;
   background-color: #e8e8e8;
   border-radius: 0.4rem;
   margin: 1rem auto;
`
const Images = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen  and (max-width: 700px){
        width: 90%;
    }
`
const Image = styled.div`
    width: 50%;
    margin: 0 auto;
     img{
        width: 100%;
        object-fit: contain;
        
    }
    
`
const AddImages = styled.button`
    
    padding: 0.5rem 0.5rem;
    margin: 1rem 0rem 1rem 3.8rem;
    background-color: greenyellow;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    -webkit-box-shadow: 0px 5px 10px -2px #000000; 
    box-shadow: 0px 5px 10px -2px #000000;
    &:hover{
        opacity: 0.8;
        transform: scale(1.02);
    }
`
const ProductInfo = styled.div`
    width: 60%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.6rem;
    @media screen  and (max-width: 700px){
        width: 90%;
    }
`

const Info = styled.div`
    flex: 1;
    background-color: #fff;
    border-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    svg{
        font-size: 1.2rem;
        margin-right: 0.8rem;
    }
    h1{
        font-size: 1.4rem;
    }
    h2{
        font-size: 1.2rem;
    }
    @media screen  and (max-width: 700px){
        width: 90%;
        margin-top: 1rem;
    }
`
const InfoElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const UserImage = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    padding: 0.5rem 1.5rem;
    background-color: #e8e8e8;
    border-radius: 0.5rem;
    cursor: pointer;
    &::after{
        content: 'ყველა განცხადების ნახვა';
        font-size: 0.8rem;
        color: #0056f5;
        position: absolute;
        top: 40%;
        right: -100%;
        display: none;
    }
    &:hover{
        opacity: 0.8;
        &::after{
            display: block;
        }
    }
    img{
        width: 3rem;
        height: 3rem;
    }
    h2{
        margin-left: 0.3rem;
    }
    
`


export default ProductDetails
