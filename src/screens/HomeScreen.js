import { View, Text, StyleSheet, FlatList, Dimensions,} from 'react-native';

import CategoryCard from "../components/CategoryCard";

import { CATEGORIES } from "../data/categories";

import { SCREENS } from '../constants/screens';

import { COLORS} from "../theme/colors";
import { SIZES } from "../theme/sizes";


const HomeScreen = ({navigation,}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Оберіть тип свята
      </Text>

      <FlatList 
        data={CATEGORIES}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', }}
        contentContainerStyle={styles.grid}
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
    marginTop: 60,
    padding: SIZES.md,
    backgroundColor: COLORS.bg,
  },

  grid: {
    gap: SIZES.xs,
  },

  title: {
    textAlign: 'center',
    fontSize: SIZES.lg,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: SIZES.md,
  },
});

export default HomeScreen ;