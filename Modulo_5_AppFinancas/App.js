// components
import { StatusBar} from 'react-native';
// import Index from './src/AulaStyledComponents/Index'
import Routes from './src/App/routes/';

// hooks
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <Index />
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}