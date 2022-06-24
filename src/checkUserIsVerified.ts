import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";

export default function useAuthContext() {
     const user = useContext(AuthContext);
     console.log("what do we have here", user)
     return user;
   }