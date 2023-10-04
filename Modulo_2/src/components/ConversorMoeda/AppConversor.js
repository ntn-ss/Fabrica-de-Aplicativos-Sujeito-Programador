import { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Picker from './components/Picker'

import Api from './services/Api'

const AppConversor = () => {

    const [moedas, setMoedas] = useState([])
    const [loading, setLoading] = useState(true)

    const [moedaSelecionada, setMoedaSelecionada] = useState(null)
    const [moedaBValor, setMoedaBValor] = useState(0)

    useEffect(() => {
        const loadMoedas = async () => {
            const response = await Api.get('/all')
            let arrayMoedas = []
            Object.keys(response.data).map(
                (key)=>arrayMoedas.push({
                    key,
                    label: key,
                    value: key
                })
            )
            
            setMoedas(arrayMoedas)
            setLoading(false)
        }
        
        loadMoedas()
    }, [])
    

    if (loading) {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator color="#FFF" size={45} />
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                
                <View style={styles.areaMoeda}>
                    <Text style={styles.titulo}>Selecione sua moeda:</Text>
                    <Picker data={moedas} onChange={(moeda)=>setMoeda(moeda)} />
                </View>
    
                <View style={styles.areaValor}>
                    <Text>Digite um valor para converter em BRL:</Text>
                    <TextInput keyboardType='numeric' style={styles.input} onChangeText={(valor)=>setMoedaBValor(valor)} placeholder="Ex.: 150" />
                </View>
    
                <TouchableOpacity style={styles.btnArea}>
                    <Text style={styles.btnTexto}>Converter</Text>
                </TouchableOpacity>
    
                <View style={styles.areaResultado}>
                    <Text style={styles.valorConvertido}>USD 3</Text>
                    <Text style={[styles.valorConvertido, {fontSize: 18}]}>corresponde a</Text>
                    <Text style={styles.valorConvertido}>R$ 15</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#101215',
        width: '100%',
        paddingTop: 40
    },
    areaMoeda: {
        width: '80%',
        backgroundColor: '#f9f9f9',
        paddingTop: 9,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        marginBottom: 1
    },
    titulo: {
        fontSize: 15,
        color: '#000',
        paddingTop: 5,
        paddingLeft: 5
    },
    areaValor: {
        width: '80%',
        backgroundColor: '#f9f9f9',
        paddingTop: 9,
        paddingBottom: 9
    },
    input: {
        width: '100%',
        padding: 10,
        height: 45,
        fontSize: 20,
        marginTop: 8,
        color: '#000'
    },
    btnArea: {
        width: '80%',
        backgroundColor: '#FB4b57',
        height: 45,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold'
    },
    areaResultado: {
        width: '80%',
        backgroundColor: '#fff',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    valorConvertido: {
        fontSize: 39,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default AppConversor