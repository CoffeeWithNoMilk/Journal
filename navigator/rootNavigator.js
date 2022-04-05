import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import {AuthStack} from './authStack';
import {Tabs} from './tabs';
import { AuthenticatedUserContext} from '../providers';
import { LoadingIndicator } from '../components/activityIndicator';
import { auth } from '../core/config';

export const RootNavigator = () => {
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // onAuthStateChanged returns an unsubscriber
      const unsubscribeAuthStateChanged = onAuthStateChanged(
        auth,
        authenticatedUser => {
          authenticatedUser ? setUser(authenticatedUser) : setUser(null);
          setIsLoading(false);
        }
      );
  
      // unsubscribe auth listener on unmount
      return unsubscribeAuthStateChanged;
    }, [user]);
  
    if (isLoading) {
        return <LoadingIndicator />;
      }
    
      return (
        <NavigationContainer>
          {user ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
      );
    };