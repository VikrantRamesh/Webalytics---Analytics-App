
const useApiCall = () => {
    // config -> obj that specifies the necessity of the API call
    // The hook returns an async function
    return async (config) => {
        console.log(config);
        const res = await fetch(`http://localhost:4573/api/${config.endpoint}`);
        const data = await res.json();
        return data;

    }
}

export default useApiCall;