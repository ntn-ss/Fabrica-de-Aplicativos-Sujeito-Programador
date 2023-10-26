import { useRef } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";

import app from "../../firebase/firebaseConnection";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection, setDoc, doc } from "firebase/firestore";

const auth = getAuth(app)
const firestore = getFirestore(app)

const Cadastro = () => {
    const nomeRef = useRef()
    const emailRef = useRef()
    const senhaRef = useRef()
    const repitaSenhaRef = useRef()

    const cadastrar = async() => {
        if (nomeRef.current.value !== '' && emailRef.current.value !== '' && senhaRef.current.value !== '' && repitaSenhaRef.current.value !== '') {
            if (senhaRef.current.value === repitaSenhaRef.current.value) {
                try {
                    const usuarioCredencial = await createUserWithEmailAndPassword(auth, emailRef.current.value, senhaRef.current.value);
                    const docRef = doc(firestore, 'usuarios', usuarioCredencial.user.uid);
                    const docData = {
                        'nome': nomeRef.current.value,
                        'email': emailRef.current.value
                    };
    
                    await setDoc(docRef, docData);
    
                    alert(`Usuário criado: ${usuarioCredencial.user.email}`);
                    
                    nomeRef.current.value = '';
                    emailRef.current.value = '';
                    repitaSenhaRef.current.value = '';
                    senhaRef.current.value = '';
                } catch (e) {
                    if (e.code === 'auth/weak-password') {
                        alert('Sua senha deve ter, no mínimo, seis caracteres.');
                    } else if (e.code === 'auth/invalid-email') {
                        alert('Insira um e-mail válido.');
                    } else {
                        alert(`Algo deu errado: ${e}`);
                    }
                }
            } else {
                alert('Os campos de senha devem ser iguais.');
            }
        } else {
            alert('Preencha todos os campos.');
        }
    }
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome: </Text>
            <TextInput style={styles.input} ref={nomeRef} autoFocus />

            <Text style={styles.text}>E-mail: </Text>
            <TextInput style={styles.input} ref={emailRef} />
    
            <Text style={styles.text}>Senha: </Text>
            <TextInput style={styles.input} ref={senhaRef} secureTextEntry={true} />
            
            <Text style={styles.text}>Repita a senha: </Text>
            <TextInput style={styles.input} ref={repitaSenhaRef} secureTextEntry={true} />
                    
            <TouchableOpacity style={[styles.button, {marginBottom: 30}]} onPress={()=>cadastrar()}>
                <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
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

export default Cadastro