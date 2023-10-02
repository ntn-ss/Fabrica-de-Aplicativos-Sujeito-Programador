import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const AulaReactNavigationTabs = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Sobre' component={Sobre} />
            </Tab.Navigator>
    )
}

const AulaReactNavigationStackComTabs = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={AulaReactNavigationTabs} options = {{headerShown: false}} />
                <Stack.Screen name='Contato' component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AulaReactNavigationStackComTabs