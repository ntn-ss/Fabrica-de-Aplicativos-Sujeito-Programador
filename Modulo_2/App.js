import { StyleSheet, View } from 'react-native';

import AppFilmes from './src/components/Filmes/AppFilmes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppFilmes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
