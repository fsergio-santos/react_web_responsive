import React, { Fragment, useState, useEffect } from "react";
import Content from "../content/Content";
import Header from "../header/Header";
//import SideBar from "../sidebar/SideBar";
import SideBar from '../sideMenu/SideBar';

const Layout = ({children}) => {
    
    const [toggle, setToggle] = useState(true)

    const toggleMenu = () => {
        setToggle(!toggle)  
    }

    useEffect(()=>{
        if (window.innerWidth < 768) {
            setToggle(false);
        } 
     },[]);
 
     useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setToggle(false);
          } else {
            setToggle(true);
          }
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <Fragment>
            <Header isToggle={toggleMenu}/>
            <SideBar sideBar={toggle}/>
            <Content sideBar={toggle}>
               { children }
            </Content>    
        </Fragment>
    )
}

export default Layout;