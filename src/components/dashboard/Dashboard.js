import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { MdEmail } from 'react-icons/md'
import ProfileDetails from './ProfileDetails';

function Dashboard(props) {
    const emailVerified = props.currentUser.emailVerified
    return (
        <ProfilePage>
            <Information showInfo={emailVerified}>
                <VerificationInfo >თუ გინდათ განცხადებების დამატება, გაიარეთ ვერიფიკაცია:</VerificationInfo>



                <p><MdEmail />იმეილი</p>

            </Information>
            <ProfileLinks>
                <ProfileLinkItem activeClassName='active' to={'/dashboard/ads'}>
                    ჩემი განცხადებები</ProfileLinkItem>
                <ProfileLinkItem activeClassName='active' to={'/dashboard/favorites'}>ფავორიტები</ProfileLinkItem>
                <ProfileLink className='profile-link' activeClassName='active' to={'/dashboard/my-page'}
                    shownotification={emailVerified ? 1 : 0}>
                    <span>პროფილი</span></ProfileLink>
            </ProfileLinks>
            <ProfileDetails page={props.page} updateDisplayName={props.updateDisplayName} />
        </ProfilePage>
    )
}

const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`
const Information = styled.div`
    
    display: ${props => !props.showInfo ? 'block' : 'none'};
    border: 0.100em solid red;
    margin: 1rem 0;
    p{
            padding: 0.5rem;
        }
    svg{
         margin-right: 0.5rem;
         transform: translate(0, 20%)
     }
     @media screen and (max-width: 760px){
        width: 90%;
       
    }
`

const VerificationInfo = styled.p`
      
`
const ProfileLinks = styled.div`
    width: 90%;
    padding: 1rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: space-around;
    background: #fff;
    @media screen and (max-width: 530px){
        flex-direction: column;
        gap: 1rem;
    }
`
const ProfileLinkItem = styled(NavLink)`
    width: 100%;
    text-align: center;
    color: #535659;
    font-weight: 500;
    position: relative;
    text-decoration: none;
    &.${props => props.activeClassName} {
    color: blue;
  }
 
    &:hover{
        color: #000000;
        opacity: 0.7;
    }
    
`
const ProfileLink = styled(ProfileLinkItem).attrs({
    className: 'profile-link'
})`
    span{
        position: relative;
        padding: 1rem;
        &::before{
    content: '';
    position: absolute;
    top: 30%;
    right: 7%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: red;
    display: ${props => props.shownotification ? 'none' : 'block'};
    
    }
    @media screen and (max-width: 760px){
        padding: 0.5rem 0;
        &::before{
            right: -10%;
        }
    }
  }
  
`

export default Dashboard
