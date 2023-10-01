import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const Stack = createStackNavigator()

const AulaReactNavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home}
                options={{
                    title: 'Início',
                    headerStyle: {
                        backgroundColor: '#121212',
                    },
                    headerTintColor: '#fff'
                }}
                />
                <Stack.Screen name='Sobre' component={Sobre}/>
                <Stack.Screen name='Contato' component={Contato}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AulaReactNavigationStack