import React from 'react';

import { AuthContext } from '../App';

//this is another func-based component used as a consumert for out AuthContext

const profile = props => (
  <AuthContext.Consumer>

    {/*It chages the txt insade the <h1></h1> element !!!*/}
    
    {authContext => {
    return (
        <h1>{authContext.isAuth ? 'You are logged in!' : 'Not logged in!'}</h1>
      );
    }}
  </AuthContext.Consumer>
);

export default profile;
