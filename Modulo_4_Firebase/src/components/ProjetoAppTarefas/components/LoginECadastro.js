import { useRef, useState } from 'react'
import { SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import app from '../../../firebase/firebaseConnection'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

let corBotao = '#141414'
let corBotaoLogin = '#3ea6f2'

const LoginECadastro = ( {changeStatus} ) => {
    const [type, setType] = useState('login')

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleLoginCadastro = async () => {
        if (type=='login') {
            const user = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((user)=>{
                changeStatus(user.user.uid)
            })
            .catch((e)=>{
                console.log(e);
                alert(`Erro ${e}`)
            })
        } else {
            const user = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((user)=>{
                changeStatus(user.user.uid)
            })
            .catch((e)=>{
                console.log(e);
                alert(`Erro ${e}`)
            })
        }
    }

    const handleType = () => {
        setType( type => type === 'login' ? 'cadastrar' : 'login')
    }

    return(
        <View>
            <TextInput placeholder = 'E-mail' style={styles.input} ref={emailRef} />
                
            <TextInput placeholder = 'Password' style={styles.input} ref={passwordRef} secureTextEntry={true} />

            <TouchableOpacity
                style={[styles.btnLogin, {backgroundColor: type === 'login' ? corBotao : corBotaoLogin}]}
                onPress={()=>handleLoginCadastro()}>
                    <Text style={styles.loginText}>
                        {type == 'login' ?
                            ('Acessar') :
                            ('Cadastrar')
                        }
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>handleType()}>
                <Text style={{textAlign: 'center'}}>
                    {type == 'login' ?
                        ('Criar uma conta') :
                        ('Já tenho cadastro')
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f6fc',
        paddingHorizontal: 10,
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 45,
        borderWidth: 1,
        borderColor: corBotao,
        padding: 10
    },
    btnLogin: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        height: 45,
        backgroundColor: corBotao
    },
    loginText: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center'
    }
})

export default LoginECadastro