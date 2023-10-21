import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const Tab = createBottomTabNavigator()

const AulaReactNavigationTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Sobre' component={Sobre} />
                <Tab.Screen name='Contato' component={Contato} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AulaReactNavigationTabs