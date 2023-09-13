import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let cor = '#dd7b22'
let segundaCor = '#121212'

const Biscoito = () => {
    const [img, setImg] = useState(require('../assets/biscoito.png'));
    const [textoFrase, setTextoFrase] = useState("Aplicativo 'Biscoito da Sorte'.")
    

    let frases = [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
    ]
    
    function quebraBiscoito() {
        let numeroAleatorio = Math.floor(Math.random() * frases.length)
        setTextoFrase('"' + frases[numeroAleatorio] + '"')
    
        setImg(require('../assets/biscoitoAberto.png'))
    }
    
    function reiniciar() {
        setImg(require('../assets/biscoito.png'))
        setTextoFrase("Aplicativo 'Biscoito da Sorte'")
    }
    return (

        <View style={styles.container}>
      
        <Image source={img} style={styles.img} />
        <Text style={styles.textoFrase}>{textoFrase}</Text>
      
        <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
            <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
                Quebrar biscoito
            </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: {segundaCor} }]} onPress={ reiniciar }>
            <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, { color: {segundaCor} } ]}>
                Reiniciar biscoito
            </Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    img:{
      width: 230,
      height: 230
    },
    textoFrase:{
      fontSize: 20,
      color: cor,
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    botao: {
      width: 230,
      height: 50,
      borderColor: cor,
      borderWidth: 2,
      borderRadius: 25
    },
    btnArea: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnTexto: {
      fontSize: 17,
      fontWeight: 'bold',
      color: cor
    }
})

export default Biscoito