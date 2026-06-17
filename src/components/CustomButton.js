import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const CustomButton = ({
  title,
  onPress,
  type = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "secondary" &&
          styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          type === "secondary" &&
            styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.md,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: SIZES.md,
  },

  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  text: {
    color: COLORS.textLight,
    fontSize: SIZES.md,
    fontWeight: "600",
  },

  secondaryText: {
    color: COLORS.primary,
  },
});

export default CustomButton;

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