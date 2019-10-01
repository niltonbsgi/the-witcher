import cookie from 'react-cookies';
  
const CST_LOGIN = "login"
const CST_LOGIN_VALUE = "logged_on"

export const isAuthenticated = () => {
    var login = cookie.load(CST_LOGIN)  
    return ( login === CST_LOGIN_VALUE ) 
}

export const LogIn = () =>{
    cookie.remove(CST_LOGIN, { path: '/' })
    cookie.save(CST_LOGIN, CST_LOGIN_VALUE, { path: '/' })
} 

export const LogOut = () =>{
    cookie.remove(CST_LOGIN, { path: '/' })
} 
