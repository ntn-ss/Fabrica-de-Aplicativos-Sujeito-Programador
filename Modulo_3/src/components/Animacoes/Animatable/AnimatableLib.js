import { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import * as Animatable from 'react-native-animatable'

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

const AnimatableLib = () => {
    const buttonRef = useRef(null);
    const handleClick = () => {
        buttonRef.current.shake();
    }
 return (
    <View style={styles.container}>
        <Animatable.Text
            style={styles.title}
            animation='shake'
            duration={2000}
            iterationCount={5}
        >
            Teste
        </Animatable.Text>

        <ButtonAnimated
            style={styles.button}
            animation='slideInUp'
            ref={buttonRef}
            onPress={handleClick}
        >
            <Text style={styles.btnText}>
                Animar
            </Text>
        </ButtonAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 30
    },
    button: {
        width: '60%',
        height: 30,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        padding: 20
    },
    btnText: {
        fontSize: 15,
        color: '#fff'
    }
})

export default AnimatableLib