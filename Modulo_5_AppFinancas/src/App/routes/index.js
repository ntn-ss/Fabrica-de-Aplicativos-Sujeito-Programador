// hooks
import { useContext } from 'react'

// context
import { AuthContext } from '../contexts/auth'

// routes
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { ActivityIndicator, View } from 'react-native'

const Routes = () => {
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#131313'}}>
                <ActivityIndicator size={'large'} color={'green'}/>
            </View>
        )
    } else {
        return (
            signed ? <AppRoutes /> : <AuthRoutes />
        )
    }
}

export default Routes