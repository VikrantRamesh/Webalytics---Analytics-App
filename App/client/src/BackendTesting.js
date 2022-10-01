import React, {useState} from "react";
import useApiCall from './hooks/useApiCall';
import useGetCookie from "./hooks/useGetCookie";
import { Link } from "react-router-dom";

const BackendTesting = () => {
    const apiCaller = useApiCall();
    const [data, setData] = useState('');
    const [response, setResponse] = useState('');
    const [value, setValue] = useState('');
    const cookieFetcher = useGetCookie();
    

    
   


    const apiCallerWrapper = async() => {
        const reqData = await apiCaller({
            method: 'GET',
            endpoint: 'mockdata'
        });
        setData(reqData);
    }

    const signupTest = async () => {
        const username = 'jack';
        const email =  'jacktech@gmail.com';
        const domain = 'www.jacktech.dev';
        const password = 'abcde12345#';
        
        const reqData = await apiCaller({endpoint: 'signup', query: {}},{username, email,domain,password}, 'POST', 'application/json');
        setResponse(JSON.stringify(reqData));
    }
    
    const loginTest = async () => {
        const username = 'jack';
        const password = 'abcde12345#';
        const reqData = await apiCaller({endpoint: 'login', query: {}},{username, password}, 'POST', 'application/json');
        setResponse(JSON.stringify(reqData));
    }

    const testFunc = async () => {
        const reqData = await apiCaller({endpoint: 'profile', query: {username : value}}, {}, 'POST', 'application/json');
        setResponse(JSON.stringify(reqData));
    }

    const APIKeyHandler = async() => {
        const username = cookieFetcher('username');
        console.log(username);
        const reqData = await apiCaller({endpoint: 'generateAPIkey', query: {username : username.data}}, {}, 'POST', 'application/json');
        setResponse(JSON.stringify(reqData));
    
    }

    const feedMockData = async() => {
        let arr = new Array(7).fill(0);
        let dataObj = {
            apiKey: 'eac803dda25c3e3369399da5125d870f22c9c6ad',
            domain: cookieFetcher('domain'),
            data: arr.map(() => {
                return {
                    date: `Sat ${Math.floor(Math.random()*20) + 10} Sep 2022`,
                    purchasesMade : Math.floor(Math.random()*50),
                    visitors: Math.floor(Math.random()*200),
                    averageTime: Math.floor(Math.random()*10000) // In seconds

                }
            })
        }
        // for(let i=0; i<10;i++){
        //     console.log(dataObj);
        // }
        console.log(dataObj);
        const domain = cookieFetcher('domain');
        console.log(domain.data);
        const reqData = await apiCaller({endpoint: 'testfeedmockdata', query: {domain: domain.data, apiKey: "eac803dda25c3e3369399da5125d870f22c9c6ad"}}, dataObj, 'POST', 'application/json')
        setResponse(JSON.stringify(reqData));
    }
    


    return(
        <>
            <div>
                <h1>Testing route, hit the button to test the API</h1>
                {/* <button type="button" onClick={apiCallerWrapper}>Get Data</button>
                <div>{JSON.stringify(data) || ''}</div> */}
            </div>

            <section style={{'maxWidth': '90%' ,'margin': '5em', 'height': 'fit-content', 'padding': '1em', 'border': '2px solid black', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'}}>
                <button type="button" onClick={signupTest}>Sign up Test</button>
                <br></br>
                <button type="button" onClick={loginTest}>Login in Test</button>
                <br></br>
               <div>
                <label htmlFor="customer">Customer Name : </label>
                <input type="text" onChange={(e) => setValue(e.target.value)} id="customer"></input>
                <button type="button" id="getDetails" onClick={testFunc} style={{'marginLeft' : '1em'}}>GO</button>
               </div>
               <br></br>
                <button type="button" onClick={APIKeyHandler}>Generate/Regenerate API Key</button>
                <br></br>
                <button type="button" onClick={feedMockData}>Mock Analytics Data</button>
                <br></br>
               <Link to="/protected">Protected Route</Link>
                <br></br>
                <button type="button" onClick={() => setResponse('')}>Reset</button>
                
            <div style={{'margin': '2em', 'maxWidth': '80%', 'height': 'fit-content', 'background': '#cccccc', 'padding': '1em'}}>
                <span style={{'fontSize': '1.4em', 'fontWeight': 'bold', 'width': '80%', 'height': 'fit-content', 'wordWrap' : 'break-word'}}>
                    TEST STATUS : {response || ''}
                </span>
            </div>
            </section>

        </>
    )

}

export default BackendTesting;