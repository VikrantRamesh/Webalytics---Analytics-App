import React, { useEffect } from 'react';
import useAuthorize from './hooks/useAuthorize';
import {useNavigate} from 'react-router-dom';

const ProtectedComponent = () => {
    const authorize = useAuthorize();
    const navigate = useNavigate();

    useEffect(() => {
        if(!authorize()){
            navigate("/loginform");
        }
    }, []);

    return(
        <>
            <h1>Protected Route Accessed !!!</h1>
        </>
    )
}

export default ProtectedComponent;