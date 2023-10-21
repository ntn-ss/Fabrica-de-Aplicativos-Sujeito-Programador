import { useEffect, useRef } from 'react'
import { Text, Animated } from 'react-native'

const AnimatedLoop = () => {

  const larguraAnimada = useRef(new Animated.Value(150)).current
  const alturaAnimada = useRef(new Animated.Value(50)).current
  const opacidadeAnimada = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacidadeAnimada, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(opacidadeAnimada, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [])

  return (
    <Animated.View style={{
      width: larguraAnimada,
      height: alturaAnimada,
      backgroundColor: '#4169e1',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: opacidadeAnimada,
      cursor: 'pointer'
    }}>
    <Text style={{
        fontSize: 22,
        color: '#fff'
      }}>Carregando...</Text>
    </Animated.View>
  )
}

export default AnimatedLoop