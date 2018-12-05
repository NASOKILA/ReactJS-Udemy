import React, { Component } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

//we declare and export a context with the React.createContext()
//and set two properties
export const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {}
});

class App extends Component {
  state = {
    isAuth: false
  };

  toggleAuth = () => {

    //here we change the isAuth to the opposite of what it was before
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth
      };
    });
  };

  /*Here we wrap the Login and Profile components and pass value to them
  the isAuth property from the state and reference to the toggleAuth function*/
  
  //This is a new lifecicle that runs before the render() method, even before componentDidMount() hook !
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[App] getDerivedStateFromProps ' + 
    JSON.stringify(nextProps) + " - " + 
    JSON.stringify(prevState));
    
    return prevState;
  }


  //This is another new lifecicle hook which gives us a snapshot before our DOM right before it changes.
  //It runs right before the DOM updates.
  getSnapshotBeforeUpdate(){
    console.log('[App] getSnapshotBeforeUpdate()')
  }


  render() {
    return (
      <AuthContext.Provider 
        value={{ isAuth: this.state.isAuth, toggleAuth: this.toggleAuth }}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
