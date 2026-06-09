import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import OptionsScreen from '../screens/OptionsScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import DateScreen from '../screens/DateScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="CategoryDetails"
          component={CategoryDetailsScreen}
        />

        <Stack.Screen
          name="Date"
          component={DateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}