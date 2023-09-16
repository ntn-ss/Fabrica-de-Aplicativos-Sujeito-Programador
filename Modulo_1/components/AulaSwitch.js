import { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

const AulaSwitch = () => {
    const [status, setStatus] = useState(false)
  return (
    <View style={styles.container}>
        <Switch 
            value = {status}
            onValueChange = { (valorSelecionado) => setStatus(valorSelecionado) }
            trackColor = {{ false: '#121212', true: '#00FF00' }}
            thumbColor = { status ? '#121212' : '#F4F4F4' }
        />
        <Text style={{ textAlign: 'center', fontSize: 25 }}>
            Status: {status ? 'ATIVADO' : 'DESATIVADO'}.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 35
    }
})

export default AulaSwitch