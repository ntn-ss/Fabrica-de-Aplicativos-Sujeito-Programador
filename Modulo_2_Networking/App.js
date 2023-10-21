import { StyleSheet, View } from 'react-native';

// import AppFilmes from './src/components/Filmes/AppFilmes';
// import AppConversor from './src/components/ConversorMoeda/AppConversor';
import AppCep from './src/components/BuscadorCep/AppCep';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppFilmes /> */}
      {/* <AppConversor /> */}
      <AppCep />
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
