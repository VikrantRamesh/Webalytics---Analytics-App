import React, { useEffect } from 'react';
import useAuthorize from './hooks/useAuthorize';
import {useNavigate} from 'react-router-dom';

const ProtectedComponent = () => {
    const authorize = useAuthorize();
    const navigate = useNavigate();

    useEffect(() => {

        const authHandler = async() => {
            const isAuthorized = await authorize();
            if(!isAuthorized){
                navigate("/loginform");
            }
        } 

        authHandler();
    }, []);

    return(
        <>
            <h1>Protected Route Accessed !!!</h1>
            <span onClick={() => {navigate("/test")}}>Back</span>
        </>
    )
}

export default ProtectedComponent;