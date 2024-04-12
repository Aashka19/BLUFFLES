
import './App.css';
import Messanger from './components/messanger';
import {GoogleOAuthProvider} from "@react-oauth/google";
import  AccountProvider from './context/AccountProvider';
function App() {
  const clientId='330510413981-tu4rvf7tplkbaasnlj9qt741iaq4j0jd.apps.googleusercontent.com';
  return (
    <div className="App">
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
   
      <Messanger/>
      
    
    </AccountProvider>
    
   </GoogleOAuthProvider>
    </div>
  );
}

export default App;
