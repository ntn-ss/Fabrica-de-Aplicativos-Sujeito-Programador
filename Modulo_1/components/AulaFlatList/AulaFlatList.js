import styles from './styles'

import { useState } from 'react'
import { View, FlatList } from 'react-native'
import Pessoa from './Pessoa'

const AulaFlatList = () => {
    const [feed, setFeed] = useState([
        { _id: '1', nome: 'Nathan', idade: 21, email: 'nathan@nathan.com'},
        { _id:'2', nome: 'Gabriel', idade: 21, email: 'gabriel@gabriel.com'},
        { _id: '3', nome: 'Olegário', idade: 70, email: 'olegario@orkut.com'},
        { _id: '4', nome: 'Thales', idade: 21, email: 'thales@thales.com'}
    ])
    
    return (
        <View style={styles.container}>
            <FlatList
                data={feed}
                keyExtractor={ (item) => item._id }
                renderItem={ ({item}) => <Pessoa data={item}> </Pessoa> }
            >
            </FlatList>
        </View>
    )
}

export default AulaFlatList