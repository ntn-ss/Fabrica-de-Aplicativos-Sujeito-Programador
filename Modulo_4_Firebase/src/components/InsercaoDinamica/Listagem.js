import { View, Text, StyleSheet } from 'react-native'

const Listagem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {data.nome}</Text>
      <Text style={styles.text}>Idade: {data.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#121212',
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontSize: 17
    }
})

export default Listagem