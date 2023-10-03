import { useState } from 'react'

import Detalhes from '../Modal/'

import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'

const Filmes = ({ data }) => {
    const [visibleModal, setVisibleModal] = useState(false)
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image source={{ uri:data.foto }} style={styles.capa}/>
            
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={ ()=>{ setVisibleModal(true) }}>
                        <Text style={styles.textoBotao}>Ler mais</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Modal
                animationType='slide'
                visible={visibleModal}
                transparent={true}
            >
                <Detalhes filme={data} voltar={ ()=>setVisibleModal(false) } />
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    titulo: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9
    },
    botao: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 8
    },
    textoBotao: {
        color: '#FFF',
        textAlign: 'center'
    }
})

export default Filmes