import { createStackNavigator } from '@react-navigation/stack';

//screens
import Tabs from './tabs';
import Notes from '../screens/notes';
import TPSettingsModal from '../screens/TPSettingsModal';
import AddStrategy from '../screens/addStrategy';

const Stack = createStackNavigator();

const RootStack= () => {
    return (
        <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false, 
                        presentation: 'modal', animationEnabled: false 
                    }
                }>
            <Stack.Screen name="App" component={Tabs} />
            <Stack.Screen name="Journal" component={Notes} 
                          options={{ animationEnabled: true }}/>
            <Stack.Screen name="Modal" component={TPSettingsModal} 
                          options={{ animationEnabled: true }}/>
             <Stack.Screen name="AddStrategy" component={AddStrategy} 
                          options={{ animationEnabled: true }}/>

        </Stack.Navigator>
    )

}

export default RootStack