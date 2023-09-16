import styles from './styles'

import {View, Text} from 'react-native'

const Pessoa = ( { data } ) => {
    const { nome, idade, email } = data;
    return (
        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>Nome: {nome}</Text>
            <Text style={styles.textoPessoa}>Idade: {idade}</Text>
            <Text style={styles.textoPessoa}>E-mail: {email}</Text>
        </View>
    )
}

export default Pessoa