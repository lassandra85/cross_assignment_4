import { View, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/theme';

type HeaderProps = {
    title1: string;
    title2: string;
};

export default function Header ({ title1,title2 }: HeaderProps) {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>{title1}</Text>
          <Text style={styles.title}>{title2}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: Platform.select({
      ios: 24,
      android: 22,
      default: 23,
    }),
    fontWeight: '600',
    color: COLORS.textDark,
  },
});