import { useRef, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";

import app from "../../firebase/firebaseConnection";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app)

const Login = () => {
    const emailRef = useRef()
    const senhaRef = useRef()

    const [user, setUser] = useState('')

    const entrar = async() => {
        if (emailRef.current.value != '' && senhaRef.current.value != '') {
            await signInWithEmailAndPassword(auth, emailRef.current.value, senhaRef.current.value)
            .then((value)=> {
                alert(`Bem-vindo, ${value.user.email}.`)
                setUser(value.user.email)
                    
                emailRef.current.value=''
                senhaRef.current.value=''
            })
            .catch((e)=>{
                if (e.code === 'auth/weak-password') {
                    alert('Sua senha deve ter, no mínimo, seis caracteres.')
                    return
                }
                if (e.code === 'auth/invalid-email') {
                    alert('Insira um e-mail válido.')
                    return
                } else {
                    alert(`Algo deu errado: ${e}`)
                    return
                }
            })
        }
        else {
            alert('Preencha os dois campos.')
        }
    }

    const sair = async() => {
        try {
            await signOut(auth)
            setUser('')
            alert('Saiu com sucesso.')
        }
        catch(e){
            alert(`Algo deu errado: ${e}`)
            return
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>E-mail: </Text>
            <TextInput style={styles.input} ref={emailRef} autoFocus />
    
            <Text style={styles.text}>Senha: </Text>
            <TextInput style={styles.input} ref={senhaRef} secureTextEntry={true} />
                    
            <TouchableOpacity style={[styles.button, {marginBottom: 30}]} onPress={()=>entrar()}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.text}>{user}</Text>
            
            {user.length > 0 ? (
                <TouchableOpacity style={[styles.button, {marginBottom: 30, backgroundColor: 'darkred'}]} onPress={()=>sair()}>
                    <Text style={styles.btnText}>Sair</Text>
                </TouchableOpacity>
            ) : <Text>Nenhum usuário ativo no momento.</Text>}
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

export default Login