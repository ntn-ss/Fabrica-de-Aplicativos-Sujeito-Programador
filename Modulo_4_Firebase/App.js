import { StyleSheet, View } from 'react-native';
import HelloWorld from './src/components/HelloWorld';

export default function App() {

  return (
    <View style={styles.container}>
      <HelloWorld />
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
