import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import OptionsScreen from '../screens/OptionsScreen';
import DateScreen from '../screens/DateScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

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
            name="Options"
            component={OptionsScreen}
        />

        <Stack.Screen
          name="Date"
          component={DateScreen}
        />
              
        <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}