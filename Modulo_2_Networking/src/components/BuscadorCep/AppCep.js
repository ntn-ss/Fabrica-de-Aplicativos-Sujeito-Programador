import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard, ActivityIndicator } from "react-native"
import Api from './services/Api'

import { useState, useRef } from "react"

const AppCep = () => {
    const [cep, setCep] = useState('')
    const [cepUser, setCepUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(null)

    const buscar = async () => {
        if (cep==''){
            alert('Digite um CEP.')
            setCep('')
            return
        }

        try {
            setLoading(true)
            const response = await Api.get(`/${cep}/json`)
            setLoading(false)
            setCepUser(response.data)
            Keyboard.dismiss()
        } catch (error) {
            alert(`Erro: ${error}`);
            setLoading(false)
        }
    }

    const limpar = () => {
        setCep('')
        inputRef.current.focus()
        setCepUser(null)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.titulo}>App Buscador de CEP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChangeText={(texto)=>setCep(texto)}
                    keyboardType="numeric"
                    ref={inputRef}
                />
                <View style={styles.btnArea}>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#1d75cd'}]} onPress={buscar}>
                        <Text style={styles.btnTexto}>Buscar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: 'red'}]} onPress={limpar}>
                        <Text style={styles.btnTexto}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {loading &&
                <View style={styles.resultado}>
                    <ActivityIndicator size={"large"}/>
                </View>
            }
            { cepUser &&
                <View style={styles.resultado}>
                    <>
                        {cepUser.bairro && <Text style={styles.itemText}>Bairro: {cepUser.bairro}.</Text>}
                        {cepUser.cep && <Text style={styles.itemText}>CEP: {cepUser.cep}.</Text>}
                        {cepUser.ddd && <Text style={styles.itemText}>DDD: {cepUser.ddd}.</Text>}
                        {cepUser.localidade && <Text style={styles.itemText}>Cidade: {cepUser.localidade}.</Text>}
                        {cepUser.logradouro && <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}.</Text>}
                        {cepUser.uf && <Text style={styles.itemText}>Estado: {cepUser.uf}.</Text>}
                    </>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        width: '90%',
        padding: 10,
        fontSize: 18
    },
    btnArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    btn: {
        padding: 9,
        borderRadius: 9
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20
    },
    resultado: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 22
    }
})

export default AppCep