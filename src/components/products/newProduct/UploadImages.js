import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { removeImage, setImages, uploadProductImage } from '../../../redux/ProductReducer'

function UploadImages(props) {
    const [files, setFiles] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [disableUpload, setDisableUpload] = useState(true)
    const { show, currentImagesCount, images, productId, category } = props
    const availableImagesUpload = 8 - currentImagesCount
    if (availableImagesUpload === 0 && !disabled) {
        setDisableUpload(true)
        setDisabled(true)

    }
    const handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            setFiles(img => [...img, { url: URL.createObjectURL(image), name: image.name }])
            props.setImages(image)

        }
        if (images.length === availableImagesUpload - 1) {
            setDisabled(true)
        }
    }
    const onRemoveImage = (file) => {
        setFiles(files.filter(item => item !== file));
        setDisabled(false)
        props.removeImage(file)

    }

    const handleUpload = () => {
        setDisableUpload(true)
        if (props.currentUser) {
            props.uploadProductImage(props.currentUser.uid, category, productId, images)
            setTimeout(function () { props.setShowModal(false) }, 3000);
        }
    }
    return (
        <Container show={show}>
            <h3>დაამატეთ მაქსიმუმ {availableImagesUpload} სურათი.</h3>
            <CloseModal onClick={() => props.setShowModal(false)}><FaTimes /></CloseModal>
            <PreviewImages>
                {files &&
                    files.map((file, index) => {
                        return <Image key={index}>
                            <FaTimes onClick={() => onRemoveImage(file)} />
                            <img src={file.url} alt={'preview'} />
                        </Image>
                    })}
            </PreviewImages>
            <Upload>
                <input type='file' onChange={handleChange} accept="image/png, image/jpeg" disabled={disabled} />
                <button type='button' onClick={handleUpload}>სურათების დამატება</button>
                {props.uploadMessage && <span>{props.uploadMessage}</span>}
            </Upload>
        </Container>
    )
}

const Container = styled.div`
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 60%;
    min-width: 60%;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    padding-bottom: 20px;
    background-color: #f0f0e9;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199, 175, 189, .25);
    opacity:  ${props => props.show ? '1' : '0'};
    transform:  ${props => props.show ? 'scale(1)' : 'scale(0)'};
    transition:  ${props => props.show ? 'opacity 250ms 500ms ease, transform 350ms 500ms ease' :
        'opacity 250ms 250ms ease, transform 300ms 250ms ease'};
    h3{
        font-size: 1.2rem;
        color: #999da3;
        text-align: center;
    }
`
const CloseModal = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    color: #75706f;
    object-fit: contain;
    cursor: pointer;
`
const PreviewImages = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const Upload = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
      margin: 0.5rem 0;
    }
    button{
      border: none;
      padding: 0.5rem 0.8rem;
      margin: 0.5rem 0;
      background: #150b2e;
      border-radius: 0.4rem;
      font-weight: 200;
      color: #fff;
      letter-spacing: 0.03rem;
      outline: none;
      &:hover{
          transform: scale(1.03);
      }
    }
`
const Image = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    img{
        width: 100%;
        object-fit: cover;
    }
    
    svg{
        position: absolute;
        top: 0;
        right: 5%;
        color: #e61c1c;
        font-size: 1.3rem;
        &::after{
            content: 'სურათის წაშლა';
            font-size: 0.8rem;
            color: red;
            position: absolute;
            top: -130%;
            display: none;
            
        }
        &:hover{
            cursor: pointer;
            &::after{
                display: block;
            }
        }
    }
`
const mapDispatchToProps = (state) => {
    return {
        images: state.product.images,
        currentUser: state.auth.currentUser,
        uploadMessage: state.product.uploadMessage
    }
}


export default connect(mapDispatchToProps, { uploadProductImage, setImages, removeImage })(UploadImages)
