// hooks
import { createStackNavigator } from '@react-navigation/stack'

// pages
import Home from '../pages/Home/'

const AppStack = createStackNavigator()

const AppRoutes = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Home} />
        </AppStack.Navigator>
    )
}

export default AppRoutes