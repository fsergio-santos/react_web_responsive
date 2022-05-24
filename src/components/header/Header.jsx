
import React , { useState }from "react";
import styled from "styled-components";
import * as FaIcons from 'react-icons/fa';
import { USER_PHOTO } from "../../config/Config";
import ProfileUser from "./Profile";


const Header = ({isToggle}) => {
    
    const [toggled, setToggled] = useState(false)
    const [showProfile, setProfile] = useState(false)

    const toggleClick = () => {
         setToggled(!toggled)
         isToggle(toggled)
    }

    const showProfileUser = () => {
        setProfile(!showProfile)
    }

    return (
        <HeaderContainer >
            <LeftArea>SISTEMA<Span> IFSP </Span></LeftArea>
            <Toggle>
                <FaIcons.FaBars onClick={()=>toggleClick()}/>
            </Toggle>
            <Profile>
                 <IMG >
                    <img src={USER_PHOTO} onClick={()=>showProfileUser()}/>
                 </IMG>
                 <Logado>Nome:</Logado>
                 <Username>Francisco Sérgio dos Santos</Username>
                 <UserLogout>
                     <FaIcons.FaSignOutAlt/>
                 </UserLogout>    
            </Profile>
            { showProfile ? ( 
                <ProfileUser/> 
              ) : null  
            }
        </HeaderContainer>   
          
    )
}

export default Header;


const HeaderContainer = styled.div `
    z-index: 1;
    position: fixed;
    background : #3C9B46;
    padding:10px;
    width: calc(100% - 0%);
    top: 0; 
    left:0;
    right:0;
    height: 70px;
`

const LeftArea = styled.h3 `
    padding-top: 7px;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
`

const Span = styled.span`
    color: #19B3D3; 
`

const Toggle = styled.div `
    position: absolute;
    margin-left: 230px;
    top: 10px;
    font-size: 30px ;
    color: #FFFF;
    cursor:pointer;

    @media (max-width: 780px){
        position: absolute;
        right: 50px;
        display: flex;

   }
  
`

const Profile = styled.div `
   position: absolute;
   right: 50px;
   display: flex;
   font-weight: bold;
   font-size: 18px;
   top:10px;

   @media (max-width: 780px){
        display:none;

   }
   
`

const IMG = styled.div `   
    top:5px;
    height: 100%;
    cursor: pointer;
    
`

export const Logado = styled.span `
   margin-top: 15px;
   margin-left: 15px;
   padding-right: 10px;
`

export const Username = styled.span `
   margin-top: 15px;
   margin-left: 15px;
   padding-right: 20px;
`

export const UserLogout = styled.div `
   margin-top: 2px;
   margin-left: 15px;
   color: #ffff;
   font-size: 30px ;
   text-decoration: none;
   cursor: pointer;
`




