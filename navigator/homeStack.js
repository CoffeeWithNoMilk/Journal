import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from '../screens/homeScreen';
import Note from '../screens/notes'

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }
                }>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notes" component={Note} />

        </Stack.Navigator>
    )

}

export default HomeStack