import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigator/tabs';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signUpScreen'
import  AuthStack  from './navigator/authStack';



const App = () => {
  return (
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
};

export default App;
