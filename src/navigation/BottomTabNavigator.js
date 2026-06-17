import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';

import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { SCREENS } from '../constants/screens';
import { COLORS } from '../theme';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,

            tabBarActiveTintColor: COLORS.secondary,
            tabBarInactiveTintColor: COLORS.gray,

            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                    case SCREENS.HOME:
                    iconName = 'home';
                    break;

                    case SCREENS.FAVORITES:
                    iconName = 'heart';
                    break;

                    case SCREENS.PROFILE:
                    iconName = 'person';
                    break;

                    default:
                    iconName = 'ellipse';
                }

                return (
                    <Ionicons
                        name={iconName}
                        size={size}
                        color={color}
                    />
                );
            },
        })}>
          
        <Tab.Screen
            name={SCREENS.HOME}
            component={HomeStackNavigator}
        />

        <Tab.Screen
            name={SCREENS.FAVORITES}
            component={FavoritesScreen}
        />

        <Tab.Screen
            name={SCREENS.PROFILE}
            component={ProfileScreen}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;




/* import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";


type Props = {
active?: "home" | "heart" | "user";
};


export default function FooterNav({ active = "home" }: Props) {
return (
<View style={styles.container}>
<Ionicons
name="home"
size={28}
color={active === "home" ? COLORS.primary : COLORS.gray}
/>
<Ionicons
name="heart"
size={28}
color={active === "heart" ? COLORS.primary : COLORS.gray}
/>
<Ionicons
name="person"
size={28}
color={active === "user" ? COLORS.primary : COLORS.gray}
/>
</View>
);
}


const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 12,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderColor: COLORS.gray,
    },
}); */