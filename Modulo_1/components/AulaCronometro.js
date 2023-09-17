import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

let timer = null;

let hh = 0;
let mm = 0;
let ss = 0;

let cor = '#00aeef'
let segundaCor = '#fff'

const Cronometro = () => {
    
    const [numero, setNumero] = useState(0)
    const [botao, setBotao] = useState('Começar')
    const [ultimo, setUltimo] = useState(null)


    function comecar() {
        if (timer !== null) {
            // parar o timer
            clearInterval(timer)
            timer = null;
            setBotao("Começar")
        }
        else {
            // começar o timer
            timer = setInterval(()=>{
                ss++;
                if (ss == 60) {
                    ss = 0;
                    mm++;
                }
                if (mm == 60){
                    mm=0;
                    hh++;
                }
                
                let format = (hh < 10 ? '0'+hh : hh) + ":"
                + (mm<10 ? '0'+mm : mm) + ":"
                + (ss<10 ? '0'+ss : ss)
        
                setNumero(format)
            }, 1000);
            setBotao('Parar')
        }

    }

    function limpar() {
        if (timer !== null) {
            // parar o timer
            clearInterval(timer)
            timer = null
        }
        setUltimo(numero)
        setNumero(0);
        ss = 0;
        mm = 0;
        hh = 0;
        setBotao('Começar')
    }

    return (
        <View style = {styles.container} >
            <Image source = { require('../assets/AulaCronometro/crono.png') } />
            <Text style = {styles.timer}> { numero } </Text>

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={comecar}>
                    <Text style={styles.btnTexto}>{botao}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn} onPress={limpar}>
                    <Text style={styles.btnTexto}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaUltima}>
                <Text style={styles.textoCorrida}>
                    {ultimo ? `Último tempo: ${ultimo}.` : ''}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cor
    },
    timer: {
        marginTop: -160,
        fontSize: 45,
        fontWeight: 'bold',
        color: segundaCor
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 130,
        height: 40
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: segundaCor,
        height: 40,
        width: 100,
        margin: 17,
        borderRadius: 9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: cor
    },
    areaUltima: {
        marginTop: 40,
    },
    textoCorrida: {
        fontSize: 23,
        color: segundaCor,
        fontStyle: 'italic'
    }
})

export default Cronometro