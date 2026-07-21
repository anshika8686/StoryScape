import { useContext } from "react";
import {AuthContext} from "../context/auth.context"

 
export function useAuth(){
const data=useContext(AuthContext)
return data;
}
