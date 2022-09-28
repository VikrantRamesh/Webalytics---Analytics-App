import React, {useState, useRef, useEffect} from "react";
import useApiCall from './hooks/useApiCall';
import Form from "./Form";

const BackendTesting = () => {
    const apiCaller = useApiCall();
    const [data, setData] = useState('');
    const [response, setResponse] = useState('');
    const [value, setValue] = useState('');
    const [requestState, setRequestState] = useState(false);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const domainRef = useRef('');
    const passwordRef = useRef('');

    // const fn = async() => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //     const data = await res.json();
    //     return data;
    // }

    // useEffect(async () => {
    //     const reqData = await apiCaller({
    //         endpoint: 'signup'
    //     });
    //     setResponse(reqData);
    // }, [requestState]);


    const apiCallerWrapper = async() => {
        const reqData = await apiCaller({
            method: 'GET',
            endpoint: 'mockdata'
        });
        setData(reqData);
    }

    const submitForm = async () => {
        const username = nameRef.current.value;
        const email = emailRef.current.value;
        const domain = domainRef.current.value;
        const password = passwordRef.current.value;
        
        const reqData = await apiCaller({
            method: 'GET',
            endpoint: 'signup',
            body : JSON.stringify({username, email, domain, password})
        })
    }


    


    return(
        <>
            <div>
                <h1>Testing route, hit the button to test the API</h1>
                <button type="button" onClick={apiCallerWrapper}>Get Data</button>
                <div>{JSON.stringify(data) || ''}</div>
            </div>

            <section style={{'margin': '5em', 'padding': '1em', 'border': '2px solid black', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'}}>
                <Form></Form>
                <button type="button" onClick={submitForm}>Submit</button>
                
            </section>

            <div>
                <h2>{response || ''}</h2>
            </div>
        </>
    )

}

export default BackendTesting;