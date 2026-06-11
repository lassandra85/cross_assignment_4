/* import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import { COLORS, SIZES } from "../constants/theme";


export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/salyut.jpg")}
                style={styles.bg}
            />

            <View style={styles.bottomBox}>
                
                <Text style={styles.title}>Організація свята мрії</Text>


                <CustomButton title="Увійти" onPress={() => navigation.navigate('HomeScreen', { itemId: 42, otherParam: 'sample' })}/>

                <CustomButton title="Зареєструватися" type="secondary" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    bg: {
        width: "100%",
        height: "70%",
    },

    bottomBox: {
        padding: SIZES.padding,
        paddingTop: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "800",
        marginBottom: 20,
        color: COLORS.textDark,
    },
}); */


import { View, Text } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;