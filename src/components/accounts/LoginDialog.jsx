 
 import { useContext } from "react";
 import {Box} from "@mui/material";
 import {GoogleLogin} from "@react-oauth/google";
 import { jwtDecode } from "jwt-decode";
 import { addUser } from "../../service/api";
 import { AccountContext } from "../../context/AccountProvider";
 const LoginDialog =() =>{
   const {setAccount}=useContext(AccountContext);
    const onLoginSuccess= async (res)=>{
       const Decoded=  jwtDecode(res.credential)
        console.log(Decoded);
        setAccount(Decoded);
       await  addUser(Decoded);
    }
    const onLoginError=(res)=>{
        console.log("Login Failed",res);
    }
    return(
        
            <Box>
               <GoogleLogin
               onSuccess={onLoginSuccess}
               onError={onLoginError}
               />
           </Box>
        
    )
 }
 export default LoginDialog;
 