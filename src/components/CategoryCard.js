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
        width: '48%',
        backgroundColor: COLORS.bg,
        padding: SIZES.xs,
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: SIZES.md,
        elevation: 3,
    },
    content: {
        alignItems: "center",
    },
    img: {
        width:'100%',
        height: 160,
    },
    title: {
        marginBottom: SIZES.xs,
        fontSize: SIZES.md,
        fontWeight: "700",
        color: COLORS.textDark,
    },
});


export default CategoryCard;

