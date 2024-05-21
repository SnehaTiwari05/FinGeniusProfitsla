export function getToken() {
    let tokendetails = null;
    if (localStorage.getItem('token')) {
        tokendetails = localStorage.getItem('token');
    }
    const token = tokendetails;
    return token;
}

export function removesession() {
    localStorage.removeItem('token');
}