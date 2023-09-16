import { useState } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const AulaPickerHooks = () => {
    const [ carroSelecionado, setCarroSelecionado ] = useState(1)
    const [carros, setCarros] = useState([
        { key: 1, nome: 'Camaro', valor: 520.000 },
        { key: 2, nome: 'Corolla', valor: 100.000 },
        { key: 3, nome: 'Palio', valor: 15.000 },
        { key: 4, nome: 'Sprinter Trueno AE86', valor: 123.000 }
    ])

    let carrosItem = carros.map((value, key)=>{
        return <Picker.Item key={key} value={key} label={value.nome}/>
    })

  return (
    <View>
        <Picker
            selectedValue={carroSelecionado}
            onValueChange={ (itemValue, itemIndex) => { setCarroSelecionado(itemValue) } }
        >
            { carrosItem }
        </Picker>

        <Text style={styles.carros}>
            Carro: {carros[carroSelecionado].nome}.
        </Text>
        <Text style={styles.carros}>
            R$ {carros[carroSelecionado].valor.toFixed(3)},00.
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35
    },
    carros: {
        marginTop: 15,
        fontSize: 25
    }
})

export default AulaPickerHooks