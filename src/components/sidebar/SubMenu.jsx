import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SubMenu = ( {  page, path, icon, opened, closed, subMenu, sub  }) => {
   const [submenu, setSubMenu] = useState(false); 

   return (
      
        <Fragment>
            <SideBarLink to={path} onClick={() => setSubMenu(!submenu)}>
              <div>
                 {icon}
                 <SideBarLabel>{page}</SideBarLabel>     
              </div> 
              <div>
                 { 
                     
                    submenu === true && sub === true  
                      ? opened     
                      : subMenu
                      ? closed
                      : null
                 }   

              </div>
            </SideBarLink>
            {
                submenu && sub && (
                    subMenu.map( ( item, index ) => {
                       return (
                          <DropdownLink to={item.path} key={index}>
                             {item.icon}
                             <SideBarLabel>{item.page}</SideBarLabel>   
                          </DropdownLink>  
                       ) 
                    })

                    )
            }
        </Fragment>
    )
}

export default SubMenu;



const SideBarLabel = styled.span`
   margin-left: 16px;
   padding: 0px;
   text-decoration:none ;
   transition: 0.5s;
 
`

const SideBarLink = styled(Link)`
   display:flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 20px;
   padding-left: 20px;
   height: 50px;
   text-decoration: none;
   font-size: 18px;
   color:#f5f5f5; // para alterar a cor da fonte.

   &:hover {
      background: #06833e;
      border-left: 3px solid #632ce4;
      cursor: pointer;
   }

`

const DropdownLink = styled(Link)`
   background: #252831;
   height: 60px;
   padding-left: 3rem;
   display: flex;
   align-items: center;
   text-decoration: none;
   color: #f5f5f5;
   font-size: 18px;

   &:hover {
      background: green;
      cursor:pointer;
   }
`
   