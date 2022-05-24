import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import AppRouter from './AppRouter';
import InserirUsuario from '../pages/usuario/InserirUsuario';
import Registrar from '../pages/login/Registrar';
import Recuperar from '../pages/login/Recuperar';

const Rotas = () => {
     
    return (
        <Router>
            <Routes>
               <Route path="/" exact element={<Login/>}/>
               <Route path="/login" exact element={<Login/>}/>
               <Route path="/registrar" exact element={<Registrar/>}/>
               <Route path="/recuperar" exact element={<Recuperar/>}/>
               <Route path="/usuario/inserir" element={<AppRouter><InserirUsuario/></AppRouter>} />
            </Routes>   
        </Router>
    )
}

export default Rotas;