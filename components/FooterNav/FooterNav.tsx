import { View, StyleSheet } from "react-native";
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
});