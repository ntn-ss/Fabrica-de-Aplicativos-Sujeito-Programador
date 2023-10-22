import { StyleSheet, View } from 'react-native';

import InsercaoDinamica from './src/components/InsercaoDinamica/InsercaoDinamica';
import Cadastro from './src/components/CadastroeLogin/Cadastro';
import Login from './src/components/CadastroeLogin/Login';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <InsercaoDinamica /> */}
      <Login />
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
