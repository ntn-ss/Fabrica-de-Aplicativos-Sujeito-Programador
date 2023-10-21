import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'

import { useState } from 'react'

const AulaSlider = () => {
    const [valor, setValor] = useState(70)

    return (
        <View style={styles.container}>
            <Slider
                minimumValue={0}
                maximumValue={200}
                value={valor}
                onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
                minimumTrackTintColor="#000FFF"
                maximumTrackTintColor="#FF0000"
                thumbTintColor="#00FF00"
            />
            <Text style={{textAlign: 'center', fontSize: 25}}>Você tem {valor.toFixed(0)} quilos.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35
    }
})

export default AulaSlider