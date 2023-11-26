// components
import {Background, Container, Logo, LogoArea, InputArea, Input, SubmitButton, Link, SubmitText, LinkText} from './styles'

// hooks
import { app } from '../../services/firebaseConn'
import { useRef } from 'react'
import { Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
  const navigation = useNavigation()
  const emailRef = useRef()
  const passwordRef = useRef()
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
            ref={emailRef}
          />
        </InputArea>

        <InputArea>
          <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            ref={passwordRef}
          />
        </InputArea>

      <SubmitButton onPress={()=>alert('Entrou')}>
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