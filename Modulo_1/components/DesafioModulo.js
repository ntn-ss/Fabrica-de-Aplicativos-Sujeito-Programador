import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import { useState } from 'react'

import { View, Text, StyleSheet, Switch, TextInput, ScrollView, Button } from 'react-native'

const DesafioModulo = () => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState()
    
    const [sexos, setSexos] = useState([
        { key: 1, valor: 'Masculino'},
        { key: 2, valor: 'Feminino'}
    ])

    const [sexoSelecionado, setSexoSelecionado] = useState(1)

    const [limite, setLimite] = useState(500)

    const [eEstudante, setEEstudante] = useState(false)

    const getSexoNome = () => {
        const sexo = sexos.find((item)=>item.key===sexoSelecionado)

        return sexo ? sexo.valor : ''
    }

    let sexosItem = sexos.map((item) => {
        return <Picker.Item key={item.key} label={item.valor} value={item.key}/>
    })

    const mostraDados = () => {
        alert(`Seu nome é "${nome}", sua idade é ${idade}, seu sexo é ${getSexoNome()}, seu limite é ${limite.toFixed(2)} e ${eEstudante ? 'você é estudante.' : 'você não é estudante.'}`,);
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 50}}>Banco Banco</Text>
            
            <Text>Nome:</Text>
            <TextInput style={styles.escrita} value={nome} onChange={(e)=>setNome(e.target.value)}/>
            <Text>Idade:</Text>
            <TextInput style={styles.escrita} value={idade} onChange={(e)=>setIdade(e.target.value)} />

            <Text>Sexo:</Text>
            
            <Picker selectedValue={sexoSelecionado} onValueChange={ (itemValue, itemIndex) => {setSexoSelecionado(itemValue)}}>
                {sexosItem}
            </Picker>

            <Text>Limite:</Text>
            <Slider minimumValue={0} value={limite} maximumValue={10000} onValueChange={(value)=>setLimite(value)}/>
            <Text>Limite selecionado: R$ {limite.toFixed(2)}.</Text>

            <Text>Estudante?</Text>
            <Switch value={eEstudante} onValueChange={(valorSelecionado) => setEEstudante(valorSelecionado)}/>
            <Button onPress={mostraDados} title="Criar Conta" color="#841584" accessibilityLabel='Botão de enviar'/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    escrita: {
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10
    }
})

export default DesafioModulo