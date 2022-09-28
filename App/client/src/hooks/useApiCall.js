
const useApiCall = () => {
    // config -> obj that specifies the necessity of the API call
    // The hook returns an async function
    return async (config, body, method='POST', contentType='application/json') => {
        console.log(config);
        const res = await fetch(`http://localhost:4573/api/${config.endpoint}`, {
            method: method,
            headers:{
                'Content-Type': contentType
            },
            body: body
        });
        const data = await res.json();
        return data;

    }
}

export default useApiCall;