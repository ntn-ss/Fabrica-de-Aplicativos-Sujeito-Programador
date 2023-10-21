import { useRef } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";

import app from "../firebase/firebaseConnection";

import { addDoc, collection, getFirestore, query } from 'firebase/firestore'

const firestore = getFirestore(app);

const HelloWorld = () => {
    const nomeRef = useRef()
    const idadeRef = useRef()

    const handleAdicionar = async (nomeColecao) => {
        if (nomeRef.current.value != '' && idadeRef.current.value != '') {
            try {
                const q = query(collection(firestore, nomeColecao))
                    const querySnapshot = await addDoc(q, {
                        'nome': nomeRef.current.value,
                        'idade': parseInt(idadeRef.current.value)
                    })
                    console.log('Sucesso');

                    nomeRef.current.clear()
                    idadeRef.current.clear()
            } catch (e) {
                console.error(e);
            }
        }
        else {
            alert('Digite os dois campos.')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome: </Text>
            <TextInput style={styles.input} ref={nomeRef} autoFocus />

            <Text style={styles.text}>Idade: </Text>
            <TextInput style={styles.input} underlineColorAndroid='transparent' ref={idadeRef} keyboardType='numeric' />
            
            <TouchableOpacity style={styles.button} onPress={()=>handleAdicionar('usuarios')}>
                <Text style={styles.btnText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnText: {
        fontSize: 16,
        color: '#eee',
        fontWeight: 'bold'
    },
    input: {
        padding: 15,
        marginVertical: 15,
        border: '2px solid black',
        borderRadius: 6
    },
    button: {
        padding: 15,
        backgroundColor: '#333',
        borderRadius: 15
    }
})

export default HelloWorld