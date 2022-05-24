
import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';

const listaUsuario = [
    {
        icon: <FaIcons.FaUserAlt/>,
        path: '/usuario/consulta',
        page:'Informações'

    },
    {
        icon: <FaIcons.FaUserEdit/>,
        path: '/usuario/inserir',
        page:'Alterar Dados'
    },
    {
        icon: <FaIcons.FaLock/>,
        path: '/usuario/senha',
        page:'Alterar Senha'

    }
]

const Profile = () => {
    return (
        <Fragment>
            <Menu>
                <AreaMenu>Conta de Usuário</AreaMenu>
                <ul>
                    { 
                        listaUsuario.map( ( item, index )  => (
                        <li key={index}>
                            <span>{item.icon}
                                <Link to={item.path}> <span>{item.page}</span> </Link>
                            </span>
                        </li>
                        ))
                    }
                </ul>
            </Menu>    
        </Fragment>
    )
}


export default Profile;

const Menu = styled.div `
    background-color:#FFF;
    box-sizing:0 5px 25px rgba(0,0,0,0.1);
    border-radius: 15px;
    padding: 10px 20px;
    position: absolute;
    right: 450px;
    width: 200px;
    transition: 0.5s;
    top: 90px;
    font-size: 20px;
    font-weight: 900;

    &:active {
        opacity: 1;
        top: 80px;
        visibility: visible;
    }

    &:before{
        background-color:#fff;
        content: '';
        height: 20px;
        position: absolute;
        right: 30px;
        transform:rotate(45deg);
        top:-5px;
        width: 20px;
    }

    &:ul li {
        align-items: center;
        border-top:1px solid rgba(0,0,0,0.05);
        display: flex;
        justify-content: left;
        list-style: none;
        padding: 10px 0px;
    }

    &:ul li a{
        display: inline-block;
        color: #555;
        font-size: 14px;
        font-weight: 600;
        padding-left: 15px;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s; 
    }

    &:hover a{
        color:#ff00ff; 
    }
   
`
    

const AreaMenu = styled.h3 `
    color: #555;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3em;
    padding: 20px 0px;
    text-align: center;
    width: 100%; 

    &:div{
       color: #818181;
       font-size: 14px;
       font-weight: 400; 
    }
`

