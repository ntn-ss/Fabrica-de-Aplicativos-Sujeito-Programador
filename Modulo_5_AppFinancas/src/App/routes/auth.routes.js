// hooks
import { createStackNavigator } from '@react-navigation/stack'
const AuthStack = createStackNavigator()

// pages
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='Entrar'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
            <AuthStack.Screen
                name='Cadastrar'
                component={SignUp}
                options={{headerStyle:{
                            backgroundColor: '#131313',
                            borderBottomWidth: 1,
                            borderBottomColor: '#00b94a',
                        },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes