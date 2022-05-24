import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const isLogged = () => {
    //let logged = localStorage.getItem('logged');
    return true;
}

const AppRouter = ({ children }) => {
    const pathname = useLocation();
    return (
         <Layout>
            { isLogged() ? ( children ) : ( <Navigate to={"/login"} state={{ from:pathname}} replace/> ) } 
          </Layout>
    )
}

export default AppRouter
