import { StyleSheet, View } from 'react-native';

// import InsercaoDinamica from './src/components/InsercaoDinamica/InsercaoDinamica';
// import Cadastro from './src/components/CadastroeLogin/Cadastro';
// import Login from './src/components/CadastroeLogin/Login';
import LogineCadastro from './src/components/ProjetoAppTarefas/';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <InsercaoDinamica />
      <Cadastro /> */}
      <LogineCadastro />
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
