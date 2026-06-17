import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { SCREENS } from '../constants/screens';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
          <Stack.Screen
            name={SCREENS.WELCOME}
            component={WelcomeScreen}
          />

          <Stack.Screen
            name={SCREENS.MAIN_TABS}
            component={BottomTabNavigator}
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigator;