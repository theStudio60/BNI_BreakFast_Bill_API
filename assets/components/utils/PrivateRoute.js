import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import cookies from 'js-cookie';


export default function PrivateRoute({children}) {

    const location = useLocation();

     if(location.pathname === '/login'){
        // instruction si le cookie existe
        if(cookies.get('APICOOKIE')){
            return <Navigate replace to="/" />
        }
    }else{
        // instruction si le cookie n'existe pas
        if(!cookies.get('APICOOKIE')){
            return <Navigate replace to="/login" />
        }
    }

        return children;
}



