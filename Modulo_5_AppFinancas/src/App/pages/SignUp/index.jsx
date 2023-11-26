// components
import {Background, Container, InputArea, Input, SubmitButton, Link, SubmitText, LinkText} from '../SignIn/styles'

// hooks
import { app } from '../../services/firebaseConn'
import { useRef } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const navigation = useNavigation()
  
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const repeatPasswordRef = useRef()

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
            ref={nameRef}
          />
        </InputArea>

        <InputArea>
          <Input 
            placeholder="E-mail"
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

        <InputArea>
          <Input 
            placeholder="Repita a senha"
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            ref={repeatPasswordRef}
          />
        </InputArea>

      <SubmitButton onPress={()=>alert('Cadastrou')}>
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