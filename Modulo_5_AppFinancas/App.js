// components
import { StatusBar} from 'react-native';
// import Index from './src/AulaStyledComponents/Index'
import Routes from './src/App/routes/';

// context
import AuthProvider from './src/App/contexts/auth';

// hooks
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <Index />
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle='light-content' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}