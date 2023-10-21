import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Home</Text>
            <Button title='Contato' onPress={()=>{navigation.navigate('Contato')}} />
            <Button title="Abrir menu" onpress={()=>navigation.toggleDrawer()}></Button>
        </View>
    )
}

export default Home