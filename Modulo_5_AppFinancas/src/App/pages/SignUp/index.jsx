// components
import {Background, Container, InputArea, Input, SubmitButton, Link, SubmitText, LinkText} from '../SignIn/styles'

// hooks
import { useContext, useState } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// context
import { AuthContext } from '../../contexts/auth'

const SignUp = () => {
  const navigation = useNavigation()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const { signUp } = useContext(AuthContext)

  const handleSignUp = () => {
    if (!email || !password || !name) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (password !== repeatPassword) {
      alert('As senhas não coincidem.');
      return;
    }
  
    signUp(email, password, name);
  }
  

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <InputArea>
          <Input 
            placeholder="Nome"
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize='none'
            value={name}
            onChangeText={(e)=>setName(e)}
          />
        </InputArea>

        <InputArea>
          <Input 
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(e)=>setEmail(e)}
          />
        </InputArea>

        <InputArea>
          <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={(e)=>setPassword(e)}
          />
        </InputArea>

        <InputArea>
          <Input 
            placeholder="Repita a senha"
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={repeatPassword}
            onChangeText={(e)=>setRepeatPassword(e)}
          />
        </InputArea>

      <SubmitButton onPress={()=>handleSignUp()}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      <Link onPress={()=>{navigation.navigate('Entrar')}}>
        <LinkText>Entrar</LinkText>
      </Link>

      </Container>
    </Background>
  )
}

export default SignUp