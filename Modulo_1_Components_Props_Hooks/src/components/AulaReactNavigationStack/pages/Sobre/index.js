import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Sobre = ({ route }) => {

    const navigation = useNavigation()
    
    navigation.setOptions({
        title: `Sobre ${route.params?.nome}`
    })

    return (
        <View>
            <Text>Sobre</Text>
            <Text>Bem-vindo à tela "Sobre".</Text>

            <Text>Meu nome é {route.params?.nome} e meu e-mail é {route.params?.email}.</Text>
            <Button title='Voltar' onPress={ ()=>navigation.goBack() } />
            <Button title='Contato' onPress={ ()=>{ navigation.navigate('Contato') }} />
        </View>
    )
}

export default Sobre