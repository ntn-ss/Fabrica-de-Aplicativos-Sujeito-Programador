// components
import { StatusBar } from 'react-native'
import { Container, Title, Name, MyButton, MyButtonText } from './styles.js'

const Index = () => {
    const nome = prompt('Digite seu nome')
    return (
        <Container>
            <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true} />
            <Title>Aplicativo</Title>
            <Name color='#6DB' size='20'>Olá, {nome}!</Name>
            <MyButton onPress={ ()=> alert('Clicou') }>
                <MyButtonText>Clique aqui</MyButtonText>
            </MyButton>
        </Container>
  )
}

export default Index