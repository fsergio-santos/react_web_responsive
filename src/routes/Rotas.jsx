import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import AppRouter from './AppRouter';
import InserirUsuario from '../pages/usuario/InserirUsuario';
import Registrar from '../pages/login/Registrar';
import Recuperar from '../pages/login/Recuperar';
import TabelaUsuario from '../pages/usuario/TabelaUsuario';

const Rotas = () => {
     
    return (
        <Router>
            <Routes>
               <Route path="/" exact element={<Login/>}/>
               <Route path="/login"  element={<Login/>}/>
               <Route path="/registrar"  element={<Registrar/>}/>
               <Route path="/recuperar"  element={<Recuperar/>}/>
               <Route path="/usuario/inserir" element={<AppRouter><InserirUsuario/></AppRouter>} />
               <Route path="/usuario/listar" element={<AppRouter><TabelaUsuario/></AppRouter>} />
               <Route path="/usuario/cancelar" element={<AppRouter><TabelaUsuario/></AppRouter>} />
            </Routes>   
        </Router>
    )
}

export default Rotas;