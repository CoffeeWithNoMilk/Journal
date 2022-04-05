import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/loginScreen";
import SignUpScreen from "../screens/signUpScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator
        screenOptions={
            {
                headerShown: false
            }
        }>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />

</Stack.Navigator>
)
}

export default AuthStack
