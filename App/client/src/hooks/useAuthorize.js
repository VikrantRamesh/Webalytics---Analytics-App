import useApiCall from "./useApiCall";

const useAuthorize = () => {
    const apiCaller = useApiCall();
    return async () => {
        const authData = await apiCaller({endpoint: 'authorize'}, 'GET', 'application/json');
        return authData;
    }
}

export default useAuthorize;