import{ createContext, useState }from "react";
import { login } from "../services/auth.api";

export const AuthContext=createContext()

 export const AuthProvider=({children})=>{
    const [loading, setloading] = useState(false)

    function handleLogin(username,password){
        setloading(true);
        const data=login(username,password);
        console.log("data coming from handleLogin(auth.context");
        console.log(data);
        return data;
        setloading(false);
    }
    return (<AuthContext.Provider value={{loading,handleLogin}}>
        {children}
    </AuthContext.Provider>)

}
