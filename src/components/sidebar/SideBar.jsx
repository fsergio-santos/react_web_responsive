import React from "react";
import styled from "styled-components";
import SubMenu from './SubMenu';
import { SideBarData } from './SideBarData';

const SideBar = ({sideBar}) => {
    return(
        <Sidebar sideBar={sideBar}>
            <SideBarWrap>
                {
                    SideBarData.map( (item, index) => {
                        return (
                            <SubMenu page={item.page} 
                                     path={item.path} 
                                     icon={item.icon}
                                     opened={item.opened}
                                     closed={item.closed} 
                                     subMenu={item.subMenu}
                                     sub={item.sub}
                                     key={index}/>
                        )
                    })
                }    

            </SideBarWrap>
        </Sidebar>
    )
}


export default SideBar; 


const Sidebar = styled.div `
    z-index: 1;
    top:0;
    background:#2f323A;
    margin-top: 70px ;
    padding-top:30px;
    position: fixed ;
   
    width:230px ;
    left: ${({ sideBar }) => (sideBar ? '0' : '-100%')};
    height: 100% ;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
    //transition: 350ms;
    //transition-property: left;
    //overflow-y: auto;
    
    @media (max-width: 780px){
        left: ${({ sideBar }) => (sideBar ? '-100%' : '0')};
    }

`
const SideBarWrap = styled.div `
   width: 100%;
`
