import { StyleSheet } from 'react-native'

let corFundo = '#121212'
let corTexto = '#eeeeee'

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    areaPessoa:{
        backgroundColor: corFundo,
        height: 200,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPessoa:{
        color: corTexto,
        fontSize: 20
    }
})

export default styles