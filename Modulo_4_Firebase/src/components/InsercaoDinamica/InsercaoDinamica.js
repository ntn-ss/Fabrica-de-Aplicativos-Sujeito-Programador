import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View, FlatList, ActivityIndicator, Pressable } from "react-native";

import app from "../../firebase/firebaseConnection";

import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query } from 'firebase/firestore'
import Listagem from "./Listagem";

const firestore = getFirestore(app);

const InsercaoDinamica = () => {
    const nomeRef = useRef()
    const idadeRef = useRef()
    
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)

    const handleAdicionar = async (nomeColecao) => {
        if (nomeRef.current.value != '' && idadeRef.current.value != '') {
            try {
                const q = query(collection(firestore, nomeColecao))
                    const querySnapshot = await addDoc(q, {
                        'nome': nomeRef.current.value,
                        'idade': parseInt(idadeRef.current.value)
                    })

                    nomeRef.current.clear()
                    idadeRef.current.clear()

                    alert('Cadastrado com sucesso.')

                    pegaDados()
            } catch (e) {
                console.error(e);
            }
        }
        else {
            alert('Digite os dois campos.')
        }
    }

    const deletaDado = async(idItem, nomeItem) => {
        try {
            const docRef = doc(firestore, 'usuarios', idItem)
            await deleteDoc(docRef)

            alert(`Item "${nomeItem}" apagado com sucesso.`)

            pegaDados()
        } catch(e) {
            console.error(e)
        }
    }

    const pegaDados = async () => {
        try {
            setLoading(true)
            const q = query(collection(firestore, 'usuarios'))
            const querySnapshot = await getDocs(q)

            setUsuarios([])

            querySnapshot.forEach((doc)=>{
                let data = {
                    key: doc.id,
                    nome: doc.data().nome,
                    idade: doc.data().idade
                }

                setUsuarios(oldArray => [...oldArray, data].reverse())
            })

            setLoading(false)
        }
        catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        pegaDados()
    }, [])
    
    return (
        ( loading ? (
                <ActivityIndicator color="#121212" size={"large"}/>
            ) :
                ( <View style={styles.container}>
                    <Text style={styles.text}>Nome: </Text>
                    <TextInput style={styles.input} ref={nomeRef} autoFocus />
    
                    <Text style={styles.text}>Idade: </Text>
                    <TextInput style={styles.input} underlineColorAndroid='transparent' ref={idadeRef} keyboardType='numeric' />
                    
                    <TouchableOpacity style={[styles.button, {marginBottom: 30}]} onPress={()=>handleAdicionar('usuarios')}>
                        <Text style={styles.btnText}>Adicionar</Text>
                    </TouchableOpacity>
                    <FlatList
                        keyExtractor = {(item) => item.key}
                        data = {usuarios}
                        renderItem = { ({ item }) =>
                            ( <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Listagem data={item} />
                                <TouchableOpacity style={[styles.button, {backgroundColor: 'darkred'}]} onPress={()=>deletaDado(item.key, item.nome)}>
                                    <Text style={styles.btnText}>Apagar</Text>
                                </TouchableOpacity>
                            </View> )
                        }
                    />
                </View> )
            )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '15%'
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
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6
    },
    button: {
        padding: 15,
        backgroundColor: '#333',
        borderRadius: 15
    }
})

export default InsercaoDinamica