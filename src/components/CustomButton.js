/* import { TouchableOpacity, Text, StyleSheet, Platform  } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";


export default function CustomButton({ title, onPress, type = "primary" }) {
return (
<TouchableOpacity
onPress={onPress}
style={[styles.btn, type === "secondary" && styles.secondary]}
>
<Text style={styles.text}>{title}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
    btn: {
        padding: Platform.select({
            ios: 16,
            android: 14,
            default: 15,
        }),
        marginTop: 150,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        alignItems: "center",
        marginVertical: 8,
    },
    secondary: {
        backgroundColor: COLORS.secondary,
    },
    text: {
        color: COLORS.textLight,
        fontSize: 16,
        fontWeight: Platform.select({
            ios: '500',
            android: '600',
            default: '600',
        }),
    },
}); */