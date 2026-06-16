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