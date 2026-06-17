import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import OptionsScreen from '../screens/OptionsScreen';
import DateScreen from '../screens/DateScreen';

import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
      />

      <Stack.Screen
        name={SCREENS.CATEGORY_DETAILS}
        component={CategoryDetailsScreen}
      />

      <Stack.Screen
        name={SCREENS.OPTIONS}
        component={OptionsScreen}
      />

      <Stack.Screen
        name={SCREENS.DATE}
        component={DateScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;