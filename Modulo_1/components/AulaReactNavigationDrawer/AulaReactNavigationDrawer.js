import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'


import CustomDrawer from './components/CustomDrawer'

const AulaReactNavigationDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={CustomDrawer}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="Contato" component={Contato} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AulaReactNavigationDrawer