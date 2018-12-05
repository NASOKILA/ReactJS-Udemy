import React, { Component } from 'react';

//we import the context we created in the App component
import { AuthContext } from '../App';

//This is a func-based component which is used like a consumer for the AuthContext
class Login extends Component {
  
  /*We work with the isAuth property that we passed.
  It changes the text of the button.
  And we use the toggleAuth function to toggle the button's text*/
  
  render(){
    return (
      
      <AuthContext.Consumer>
  {authContext => {
    
    return (
      <button onClick={authContext.toggleAuth}>
          {authContext.isAuth ? 'Logout' : 'Login'}
        </button>
      );
    }}
    </AuthContext.Consumer>
  );
}
 
}
export default Login;
