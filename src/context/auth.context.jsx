import{ createContext, useState }from "react";
import { login, signup } from "../services/auth.api";

export const AuthContext=createContext()

 export const AuthProvider=({children})=>{
    const [loading, setloading] = useState(false)

    function handleLogin(username,password){
        setloading(true);
        const data=login(username,password);
        console.log("data coming from handleLogin(auth.context)");
        console.log(data);
        return data;
        setloading(false);
    }

    function handlesignup(username,email,password){
        setloading(true);
        const data=signup(username,email,password);
        console.log("data coming from handlesignup(auth.context)");
        console.log(data);
        return data;
        setloading(false);
    }

    return (<AuthContext.Provider value={{loading,handleLogin, handlesignup}}>
        {children}
    </AuthContext.Provider>)

}
