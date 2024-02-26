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
      <TouchableOpacity onPress={()=>handleLogout()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home