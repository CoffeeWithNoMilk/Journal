import { createStackNavigator } from '@react-navigation/stack';

//screens
import JournalScreen from '../screens/journalScreen';
import TradeDetail from '../screens/tradeDetail';

const Stack = createStackNavigator();

const JournalStack = () => {
    return (
        <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }
                }>
            <Stack.Screen name="Journal" component={JournalScreen} />
            <Stack.Screen name="TradeDetail" component={TradeDetail} />

        </Stack.Navigator>
    )

}

export default JournalStack