import useApiCall from "./useApiCall";

const useAuthorize = () => {
    const apiCaller = useApiCall();
    return async () => {
        const authData = await apiCaller({endpoint: 'authorize', query: {}}, {}, 'POST', 'application/json');
        console.log(authData);
        return !authData.error;
    }
}

export default useAuthorize;