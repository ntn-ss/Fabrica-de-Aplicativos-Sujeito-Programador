import { useEffect, useRef, useState } from 'react'
import { Text, Animated } from 'react-native'

const AnimatedSequence = () => {

  const larguraAnimada = useRef(new Animated.Value(0)).current
  const alturaAnimada = useRef(new Animated.Value(1)).current
  
  const [mostraTexto, setMostraTexto] = useState(true);

  useEffect(() => {
    
    Animated.sequence([
      Animated.timing(larguraAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(alturaAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start(()=>{
        setMostraTexto(!mostraTexto)
    }
    )
  }, [])
  
  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  return (
    <Animated.View style={{
      width: porcentagemLargura,
      height: porcentagemAltura,
      backgroundColor: '#4169e1',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }}>
    {mostraTexto && 
        <Text style={{
            fontSize: 22,
            color: '#fff'
          }}>Carregando...</Text>
    }
    </Animated.View>
  )
}

export default AnimatedSequence