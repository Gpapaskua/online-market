import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { updateDisplayName, verifyEmail } from '../../../redux/authReducer';
import { FAV_HEADERS } from '../Favorites';
import { HEADER_ITEMS } from '../favorites/Favorite';

function MyProfile(props) {
    const { currentUser } = props;
    const [name, setName] = useState('')
    const [showNameUpdate, setShowNameUpdate] = useState(true)
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onSaveName = () => {
        props.updateDisplayName(name)
    }
    const onEmailVerification = () => {
        props.verifyEmail()
    }
    const onDisplayNameUpdate = () => {
        setShowNameUpdate(false)
    }
    return (

        <PROFILE_TABLE>
            {props.emailVerification && alert(props.emailVerification)}
            <PROFILE_HEADERS>
                <h4>სახელი</h4>
                <h4>იმეილი</h4>
            </PROFILE_HEADERS>
            <PROFILE_ITEMS>
                {
                    showNameUpdate && currentUser.displayName ?
                        <PROFILE_ITEM>
                            <span>{currentUser.displayName}</span>
                            <button type='button' onClick={onDisplayNameUpdate}>შეცვლა</button>
                        </PROFILE_ITEM>
                        :
                        <PROFILE_ITEM>
                            <NameInput>
                                <span>შეიყვანეთ თქვენი სახელი</span>
                                <input type='text' onChange={onNameChange} value={name} />
                                <SaveButton type='button' onClick={onSaveName}>დამახსოვრება</SaveButton>
                            </NameInput>
                        </PROFILE_ITEM>
                }
                <PROFILE_ITEM>
                    <EMAIL>{currentUser.email}</EMAIL>
                    {
                        !currentUser.emailVerified && <button type='button' onClick={onEmailVerification}>ვერიფიკაცია</button>
                    }
                </PROFILE_ITEM>

            </PROFILE_ITEMS>


        </PROFILE_TABLE>
    )
}
const PROFILE_HEADERS = styled(FAV_HEADERS)`
    grid-template-columns: repeat(2, 1fr);
`
const PROFILE_TABLE = styled.div`
    width: 90%;
    margin-top: 1rem;
`
const PROFILE_ITEMS = styled(HEADER_ITEMS)`
    grid-template-columns: repeat(2, 1fr);
    min-height: 30vh;
    justify-content: center;
`
const PROFILE_ITEM = styled.div`
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0.5rem;
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    button{
        margin-top: 0.8rem;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        background: #43b538;
        width: 50%;
        padding: 0.5rem 0;
        font-size: 0.9rem;
        font-weight: 500;
        &:hover, :focus{
            transform: scale(1.03);
            outline: none;
            border: 1px solid #ccc;
        }
    }
   
`
const NameInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    span{
        font-size: 0.8rem;
        color: #ccc;
    }
    input{
        width: 40%;
        padding: 0.2rem;
        margin-top: 0.4rem;
        border-radius: 0.3rem;
        border: 0.125em solid #ccc;
        &:focus{
            transform: scale(1.05);
            outline: none;
        } 
    }
`
const SaveButton = styled.button`
    font-size: 0.95rem;
    margin-top: 0.4rem;
    border: none;
    padding: 0.4rem;
    background: #3f80eb;
    border-radius: 0.4rem;
    color: #000;
    font-weight: 200;
`
const EMAIL = styled.span`
    transform: translate(0, -100%);
`
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        emailVerification: state.auth.emailVerification
    }
}

export default connect(mapStateToProps, { updateDisplayName, verifyEmail })(MyProfile)
