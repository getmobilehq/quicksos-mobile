import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";

export default function useAuthContext() {
     const value = useContext(AuthContext);
     return value;
   }