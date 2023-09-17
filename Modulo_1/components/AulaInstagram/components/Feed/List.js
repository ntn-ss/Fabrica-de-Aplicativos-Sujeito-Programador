import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const List = ({ item }) => {

    const carregaIcone = (curtida) => {
        return curtida ? require('../../../../assets/AulaInsta/likeada.png') :
        require('../../../../assets/AulaInsta/like.png')
    }

    const mostraLikes = (curtidas) => {
        if ( curtidas === 0 ) {
            return;
        }
        return (
            <Text style={styles.likes}>{curtidas} {curtidas > 1 ? 'curtidas' : 'curtida'}</Text>
        )
    }

    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image source={item.imgPerfil} style={styles.fotoPerfil} />
                <Text style={styles.nomeUsuario}>{item.nome}</Text>
            </View>
                <Image resizeMode='cover' source={{uri: item.imgPublicacao}} style={styles.fotoPublicacao} />

                <View style={styles.areaBtn}>
                    <TouchableOpacity>
                        <Image source={ carregaIcone(item.curtida) } style={styles.iconeLike} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../../../../assets/AulaInsta/comment.png')} style={styles.btnSend} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../../../../assets/AulaInsta/send.png')} style={styles.btnSend} />
                    </TouchableOpacity>


                </View>
                { mostraLikes(item.curtidas) }
                
                <Text style={styles.nomeRodape}>
                    {item.nome}
                </Text>
                <Text style={styles.descRodape}>
                    {item.descricao}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPerfil:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUsuario:{
        paddingLeft: 5,
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold'
    },
    fotoPublicacao: {
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    iconeLike: {
        width: 25,
        height: 25
    },
    btnSend: {
        paddingLeft: 10,
        width: 25,
        height: 25
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    descRodape: {
        paddingLeft: 5,
        paddingBottom: 10
    }
})

export default List