
export const isLoggedIn = () => {
    const token = window.localStorage.getItem("token");

    if(!token){
        return false;
    }

    const expirationDate = window.localStorage.getItem("expirationDate");

    console.log('#### expirationDate', expirationDate);

    return (!expirationDate) ? false : true;
}

export const clearToken = () => {
    window.localStorage.clear();
}

export const setToken = (token: string, expirationDate: string) => {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("expirationDate", expirationDate);
}