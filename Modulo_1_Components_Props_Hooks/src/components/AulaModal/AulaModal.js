import { useState } from 'react'

import { Button, Modal, StyleSheet, Text, View } from 'react-native'

import Detalhes from './Detalhes/Detalhes'

const AulaModal = () => {

    const [ modalVisible, setModalVisible ] = useState(false)

    const abrirModal = () => {
        setModalVisible(true)
    }

    const sairModal = () => {
        setModalVisible(false)
    }

    return (
        <View style = { styles.container }>
            <Button title="Acessar" onPress={ abrirModal } />
            
            <Modal transparent={true} animationType='slide' visible={ modalVisible }>
                <Detalhes fechar = { sairModal }/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AulaModal