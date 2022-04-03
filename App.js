import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigator/tabs';
import LoginScreen from './screens/loginScreen';



const App = () => {
  return (
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
      <LoginScreen />
  );
};

export default App;
