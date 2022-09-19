import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home';
import { Game } from '../screens/Game';

const {Navigator, Screen} = createNativeStackNavigator();


export const AppRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="game"
                component={Game}
            />
        </Navigator>
    );
}