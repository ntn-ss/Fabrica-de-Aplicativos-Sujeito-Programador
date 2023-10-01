import { View, Text, Button } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'

const Contato = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Contato</Text>
            
            <Button title="Voltar" onPress={ ()=>navigation.goBack() } />
            <Button title="Página Inicial" onPress={ ()=>navigation.dispatch(StackActions.popToTop()) } />
        </View>
    )
}

export default Contato