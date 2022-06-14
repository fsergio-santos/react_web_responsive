import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from 'react-icons/fa';

const SideBar = ({sideBar}) => {
   
    const [showSubMenu, setShowSubMenu] = useState(false)
    
    return (
        <Fragment>
            <SideBarMenu sideBar={sideBar} >
               <div className={ sideBar ? 'sidebar' : 'sidebar close'}> 
                    <ul className="nav-links">
                        <li> 
                            <Link to=''><i><FaIcons.FaTachometerAlt/></i><span className="link_name">Menu Principal</span></Link>
                            <ul className="sub-menu blank">
                                <li><Link to='#' className="link_name" >Menu Principal</Link></li>
                            </ul>
                        </li>
                        <li onClick={()=>setShowSubMenu(!showSubMenu)} className={ showSubMenu ? 'showMenu' : '' } >
                           <div className="iocn-link">
                                <Link to="#"><i><FaIcons.FaRegListAlt/></i><span className="link_name">Cadastro</span></Link>
                                {  
                                    sideBar ? showSubMenu ? <i><FaIcons.FaAngleDown/></i> 
                                                          : <i><FaIcons.FaAngleUp/></i>
                                            : null              
                                }
                            </div>
                            <ul className="sub-menu">
                                <li><Link className="link_name" to="#">Cadastro</Link></li>
                                <li><Link to="#"><i><FaIcons.FaUserEdit/></i>Autores</Link></li>
                                <li><Link to="#"><i><FaIcons.FaBuilding/></i>Editoras</Link></li>
                                <li><Link to="#"><i><FaIcons.FaBook/></i>Livros</Link></li>
                            </ul>
                        </li>
                    </ul>
               </div> 
            </SideBarMenu> 
        </Fragment>
    );
}


export default SideBar;



const SideBarMenu = styled.div `
    
    .sidebar {
        z-index: 1000;
        position:fixed ;
        margin-top: 70px ;
        padding-top:30px;
        top:0 ;
        left:0 ;
        height:100% ;
        width:${({ sideBar }) => (sideBar ? '220px' : '78px')};
        background:#11101d ;
        animation: .6s;
    }    

    .sidebar .close {
        width:78px ;
    }

    .sidebar .nav-links {
        color:#ffff;
        height: 100%;
        padding: 20px 0 200px 0;
        overflow: auto;
    }

    .sidebar .nav-links{
        overflow: visible;
     }
    
    .sidebar .nav-links::-webkit-scrollbar{
        display: none;
    }
    
    .sidebar .nav-links li{
        position: relative;
        list-style: none;
        transition: all 0.4s ease;
    }
    
    .sidebar .nav-links li:hover{
        background: #1d1b31;
    }

    .sidebar .nav-links li .iocn-link{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .sidebar.close .nav-links li .iocn-link{
        display: block
    }

    .sidebar .nav-links li i{
        height: 50px;
        min-width: 78px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

    }

    .sidebar .nav-links li.showMenu i.arrow{
       transform: rotate(-180deg);
    }

    .sidebar.close .nav-links i.arrow{
        display: none;
    }

    .sidebar .nav-links li a{
        display: flex;
        align-items: center;
        text-decoration: none;

    }

    .sidebar .nav-links li a .link_name{
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        transition: all 0.4s ease;
    }

    .sidebar.close .nav-links li a .link_name{
        opacity: 0;
        pointer-events: none;
    }

    .sidebar .nav-links li .sub-menu{
        padding: 6px 6px 10px 25px;
        margin-top: -10px;
        background: #1d1b31;
        display: none;
    }

    .sidebar .nav-links li.showMenu .sub-menu{
        display: block;
    }

    .sidebar .nav-links li .sub-menu a{
        color: #fff;
        font-size: 15px;
        padding: 0;
        white-space: nowrap;
        opacity: 0.6;
        transition: all 0.3s ease;
    }

    .sidebar .nav-links li .sub-menu a:hover{
        opacity: 1;
    }

    .sidebar.close .nav-links li .sub-menu{
        position: absolute;
        left: 100%;
        top: -10px;
        margin-top: 0;
        padding: 6px 20px 10px 10px;
        border-radius: 0 6px 6px 0;
        opacity: 0;
        display: block;
        pointer-events: none;
        transition: 0s;
    }

    .sidebar.close .nav-links li:hover .sub-menu{
        top: 0;
        opacity: 1;
        pointer-events: auto;
        transition: all 0.4s ease;
    }

    .sidebar .nav-links li .sub-menu .link_name{
        display: none;
    }

    .sidebar.close .nav-links li .sub-menu .link_name{
        font-size: 18px;
        opacity: 1;
        display: block;
    }

    .sidebar .nav-links li .sub-menu.blank{
        opacity: 1;
        pointer-events: auto;
        padding: 3px 20px 6px 16px;
        opacity: 0;
        pointer-events: none;
    }

    .sidebar .nav-links li:hover .sub-menu.blank{
        top: 50%;
        transform: translateY(-50%);
    }
  
    
    

    
    

    

`

