
const createURL = (config) => {
    console.log(config);
    let url = `http://localhost:4573/api/${config.endpoint}`;
    // for(let x of Object.entries(config.params)){
    //     url.concat(`/${x}`);
    // }
    // if(config.query != {}) url.concat('?');
    if(config.query != {}){
        url = url.concat('?');
        for(let [key, value] of Object.entries(config.query)){
            url = url.concat(`${key}=${value}&`);
        }
        url = url.slice(0, -1);
    }
    console.log(url);
    return url;
}


const useApiCall = () => {
    // config -> obj that specifies the necessity of the API call
    // The hook returns an async function
    return async (config, body = {}, method='POST', contentType='application/json') => {
        
        const res = await fetch(createURL(config), {
            method: method,
            credentials: config.endpoint === 'signup' ? 'omit' : 'include',
            headers:{
                'Content-Type': contentType
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        return data;

    }
}

export default useApiCall;