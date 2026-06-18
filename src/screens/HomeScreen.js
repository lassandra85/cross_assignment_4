/* import { View,StyleSheet, ScrollView, Dimensions } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { COLORS, SIZES } from "../../constants/theme";
import { categories } from "../../data/categories";

const screenWidth = Dimensions.get('window').width;
const isTablet = screenWidth >= 768;

const CARDS_IN_ROW = isTablet ? 3 : 2;

const CARD_WIDTH =
  (screenWidth - SIZES.padding * 2 - SIZES.gap * (CARDS_IN_ROW - 1)) /
  CARDS_IN_ROW;


export default function HomeList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.grid}>
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
              width={CARD_WIDTH}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: 60,
  padding: SIZES.padding,
  backgroundColor: COLORS.bg,
},
grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SIZES.gap,
  },
title: {
fontSize: 22,
fontWeight: "700",
color: COLORS.textDark,
},
}); */

import { View, Text, StyleSheet, FlatList, } from 'react-native';

import CategoryCard from "../components/CategoryCard";

import { CATEGORIES } from "../data/categories";

import { SCREENS } from '../constants/screens';


const HomeScreen = ({navigation,}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Оберіть тип свята
      </Text>

      <FlatList
        data={CATEGORIES}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            image={item.image}
            onPress={() =>
              navigation.navigate(
                SCREENS.CATEGORY_DETAILS,
                {
                  categoryName: item.title,
                }
              )
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default HomeScreen ;