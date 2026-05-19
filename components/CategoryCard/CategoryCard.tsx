import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
type Props = {
    title: string;
    image: any;
    width: number;
};


export default function CategoryCard({ title, image, width }: Props) {
return (
    <View style={[styles.card, {width}]}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.img} resizeMode="contain" />
    </View>
);
}


const styles = StyleSheet.create({
card: {
    backgroundColor: COLORS.bg,
    padding: 6,
    borderRadius: SIZES.radius,
    alignItems: 'center',
},
img: {
width:160,
height: 160,
},
title: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
},
});