import {Box,styled} from "@mui/material"
import LoginDialog from "./accounts/LoginDialog";
import Dashboard from "./Dash/Dashboard.jsx";

import attendImage from './attend.png'; 
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import pic from './google2.jpeg'
  const Dialog =styled(Box)`
  margin-left:34%`;
  
const Messanger =()=>{
 const {account}=useContext(AccountContext);
   return (
       

        <Box >
         {
            account ?
                 <Dashboard/> 
            :
            <> <div className="container" style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'black',overflow: 'hidden'}}>
            <div className="image no-gutters" style={{ width: '50%', height: '100vh', backgroundImage: `url(${attendImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className="login no-gutters" style={{ width: '50%', height: '100vh', padding: '20px', backgroundColor: 'black' }}>
            <>
            <Box> <form style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} action="/action.php">
             <h1 style={{ marginTop: '100px',marginBottom: '20px', fontWeight: '400' }}>Login to continue</h1>
              <input style={{ width: '60%', padding: '10px', marginBottom: '10px', marginLeft: '30px', marginRight: '30px', border: '1px solid white', borderRadius: '10px' }} type="text" placeholder="username" />
             <input style={{ width: '60%', padding: '10px', marginBottom: '10px', marginLeft: '30px', marginRight: '30px', border: '1px solid white', borderRadius: '10px' }} type="password" placeholder="password" />
             <a style={{ position: 'relative', left: '120px', fontSize: '13px', marginTop: '4px', marginBottom: '4px' }} href="#">forgot password?</a>
              <button style={{ width: '60%', padding: '10px', marginBottom: '40px', marginLeft: '30px', marginRight: '30px', marginTop: '10px', backgroundColor: '#6675df', color: '#fff', border: 'none', borderRadius: '10px' }} type="submit" className="login-button">Login</button>
              <p id="google" style={{ color: 'rgb(137, 136, 135)', fontSize: '15px' }}>-----or sign up using-----</p>
            <img src={pic} alt="Google Logo" style={{ width: '50px' }} />
              </form> </Box>
          <Dialog> 
            < LoginDialog /> 
          </Dialog>
           </></div></div>
          </>}
       </Box>   
       
    
   )
}
export default Messanger;