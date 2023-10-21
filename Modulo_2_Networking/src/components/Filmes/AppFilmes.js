import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native"
import api from "./services/Api"
import Filmes from "./Inicial/"


const AppFilmes = () => {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadFilmes = async () => {
            // só precisa passar a rota, pois definimos a baseURL no arquivo Api
            const response = await api.get('r-api/?api=filmes')
            
            setFilmes(response.data)
            setLoading(false)
        }

        loadFilmes()
    }, [])

    if (loading) {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator color='#121212' size={45} />
            </View>
        )
    }
        else {
            return (
                <ScrollView>
                    <Text style={{fontSize: 50, fontWeight: 'bold'}}>Filmes</Text>
                    <FlatList
                        data = {filmes}
                        keyExtractor={item=>String(item.id)}
                        renderItem={({item})=>{
                            return (
                                <Filmes data={item} />
                            )
                        }}
                    />
                </ScrollView>
            )
        }
}

export default AppFilmes