import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/AulaInsta/logo.png')}
                style={styles.logo}
            />

            <Image
                source={require('../../../assets/AulaInsta/send.png')}
                style={styles.send}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 3
    },
    send: {
        width: 23,
        height: 23
    },
    logo: {
        width: '110px',
        height: '33px'
    }
})

export default Header