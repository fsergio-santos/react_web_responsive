import React, { Fragment } from "react";
import styled from 'styled-components';

const Content = (props) => {
  return (
    <Fragment>
      <ContentContainer sideBar={props.sideBar}>
         {props.children}
      </ContentContainer>  
    </Fragment>  
  )
}


export default Content;


const ContentContainer = styled.div `
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  padding: 30px;
  background-color: #E5E5E5;
  -webkit-transition: margin-left 0.3s ease;
  -o-transition: margin-left 0.3s ease;
  transition: margin-left 0.3s ease;

  @media( max-width:780px){
    margin-left:0;
    margin-top:0p ;
  }

  @media (min-width: 768px) {
   margin-left: ${({ sideBar }) => (sideBar ? '220px' : '0')};
   // transition: margin-left 0.3s ease;
  }

  @media (max-width: 767px) {
     margin-top: 70px;
     min-width: 100%;
 
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }

  @media print {
    margin: 0;
    padding: 0;
    //background-color: #E5E5E5;
  }

`


export const Window = styled.div `
  
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  padding: 20px;
  -webkit-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;

  @media print {
     border: 1px solid #ddd;
  }

  &:overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    color: #555;
    border-radius: 3px;

  }
  
  @media (min-width: 768px) {
   margin-left: ${({ sideBar }) => (sideBar ? '220px' : '0')};
   // transition: margin-left 0.3s ease;
  }

`

export const WindowFooter = styled.div `
  border-top: 1px solid #ddd;
  padding: 20px 0 0 0;
  margin-top: 10px;

`


export const WindowTitle = styled.div `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  background-color: #FFF;
  margin: -30px -30px 30px;
  padding: 20px 30px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media print {
      display: none;
  }
  
  @media (max-width: 480px) {
        margin: -15px -15px 15px;
        padding: 20px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
  }

  &:h1 {
     margin: 0;
     font-size: 24px;
     font-weight: 400;
  }

  &:p {
    margin-bottom: 0;
    font-style: italic;
  }
 
  @media (max-width: 480px) {
    &:p {
      display: none;
    }


   @media (min-width: 768px) {
   //   margin-left: ${({ sideBar }) => (sideBar ? '220px' : '0')};
    // transition: margin-left 0.3s ease;
    }
  
}
  
`


  

