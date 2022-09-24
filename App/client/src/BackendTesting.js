import React, {useState} from "react";
import useApiCall from './hooks/useApiCall';

const BackendTesting = () => {
    const apiCaller = useApiCall();
    const [data, setData] = useState('');

    // const fn = async() => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //     const data = await res.json();
    //     return data;
    // }

    const apiCallerWrapper = async() => {
        const reqData = await apiCaller({
            endpoint: 'mockdata'
        });
        setData(reqData);
    }


    return(
        <div>
            <h1>Testing route, hit the button to test the API</h1>
            <button type="button" onClick={apiCallerWrapper}>Get Data</button>
            <div>{JSON.stringify(data) || ''}</div>
        </div>
    )

}

export default BackendTesting;