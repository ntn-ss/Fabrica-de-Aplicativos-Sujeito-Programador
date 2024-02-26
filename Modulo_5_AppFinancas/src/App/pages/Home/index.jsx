// components
import { View, Text, TouchableOpacity } from 'react-native'

// hooks
import { useContext } from 'react'

// context
import { AuthContext } from '../../contexts/auth'

const Home = () => {

  const { user, signOut } = useContext(AuthContext)

  const handleLogout = () => {
    signOut()
  }

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.nome}</Text>
      <Text>{user && user.email}</Text>
      <TouchableOpacity style={{padding: 15, backgroundColor: '#131313'}} onPress={()=>handleLogout()}>
        <Text style={{color: '#eee', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home