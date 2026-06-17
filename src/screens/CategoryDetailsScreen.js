import { View, Text, StyleSheet } from 'react-native';

const CategoryDetailsScreen = ({ route }) => {
  const { categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {categoryName}
      </Text>

      <Text>
        Тут буде інформація про вибрану категорію.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
});


export default CategoryDetailsScreen;