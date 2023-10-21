import { StyleSheet, Text, View } from 'react-native';
import Animacoes from './src/components/Animacoes/Animacoes';

export default function App() {
  return (
    <View style={styles.container}>
      <Animacoes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});