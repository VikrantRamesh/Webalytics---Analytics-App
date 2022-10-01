const useGetCookie = () => {
    return (cookieName) => {
        let cookies = document.cookie;
        if(!cookies){
            return {error: true, value: undefined};
        }else{
            if(cookies.split(';').length === 1){
                return {error: true, value: undefined};
            }else{
                let cookieList = cookies.split(';');
                for(let x of cookieList){
                    const cookieData = x.split('=');
                    if(cookieData[0].trim() == cookieName){
                        return {error : false, data: cookieData[1]};
                    }
                }
            }
        }

        return {error: true, value: undefined}
    }
}

export default useGetCookie;