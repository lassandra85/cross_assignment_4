import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

import { COLORS} from "../theme/colors";
import { SIZES } from "../theme/sizes";


const CategoryCard = ({
  title,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Image source={image} style={styles.img} resizeMode="contain" />

        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.bg,
        padding: SIZES.md,
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: SIZES.md,
        elevation: 3,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        width:80,
        height: 80,
        },
    title: {
        marginBottom: 20,
        fontSize: SIZES.md,
        fontWeight: "700",
        color: COLORS.textDark,
    },
});


export default CategoryCard;

