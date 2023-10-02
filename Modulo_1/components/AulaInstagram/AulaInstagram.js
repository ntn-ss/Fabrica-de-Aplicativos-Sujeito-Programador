import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from './components/Header'
import Feed from './components/Feed/Feed'

const AulaInstagram = () => {

    const [feed, setFeed] = useState([
        {
            id: '1',
            nome: 'Nathan Santos',
            descricao: 'Ela não me quis de novo',
            imgPerfil: require('../../assets/AulaInsta/perfil.jpg'),
            imgPublicacao: 'https://images.uncyc.org/commons/6/64/Jornal_canaldoboi.jpg',
            curtida: true,
            curtidas: 1
        },
        {
            id: '2',
            nome: 'Olegário Bruno',
            descricao: 'Fotinha do meu quintal',
            imgPerfil: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRDR2BDQwMK5oF8OW4xRC1MxankAjyPpsK77kTAXebhHJYyIBpL',
            imgPublicacao: 'https://www.infoescola.com/wp-content/uploads/2010/09/cretaceo-dinossauros-1094368226.jpg',
            curtida: false,
            curtidas: 666
        }
    ])

    return (
        <View style={styles.container}>
            <Header />

            <Feed data={feed} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AulaInstagram