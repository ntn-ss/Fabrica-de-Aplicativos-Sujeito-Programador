import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    
    function irSobre() {
        navigation.navigate('Sobre', { nome: 'Nathan', email: 'nathan@nathan.com' } )
    }

    return (
        <View>
            <Text>Home</Text>
            <Text>Bem-vindo à tela "Home".</Text>

            <Button title='Ir para Sobre' onPress={ irSobre } />
        </View>
    )
}

export default Home