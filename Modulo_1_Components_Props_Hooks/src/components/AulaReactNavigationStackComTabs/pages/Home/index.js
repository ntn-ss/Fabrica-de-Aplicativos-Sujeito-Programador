import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Home</Text>
            <Button title='Contato' onPress={()=>{navigation.navigate('Contato')}} />
        </View>
    )
}

export default Home