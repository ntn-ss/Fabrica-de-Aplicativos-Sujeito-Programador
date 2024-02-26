// components
import {Background, Container, Logo, LogoArea, InputArea, Input, SubmitButton, Link, SubmitText, LinkText} from './styles'

// hooks
import { useContext, useState } from 'react'
import { Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

// context
import { AuthContext } from '../../contexts/auth'

const SignIn = () => {
  const navigation = useNavigation()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  const handleLogin = () => {
    signIn(email, password)
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        
        <Logo source={require('../../../../assets/Logo.png')} />
        
        <InputArea>
          <Input 
            placeholder="E-mail"
            autoFocus={true}
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

      <SubmitButton onPress={()=>handleLogin()}>
        <SubmitText>Entrar</SubmitText>
      </SubmitButton>

      <Link onPress={()=>navigation.navigate('Cadastrar')}>
        <LinkText>Cadastrar-se</LinkText>
      </Link>

      </Container>
    </Background>
  )
}

export default SignIn