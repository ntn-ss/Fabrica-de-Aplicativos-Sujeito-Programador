import { FlatList } from 'react-native'

import List from './List'

const Feed = ( {data} ) => {
    return (
        <FlatList
            keyExtractor={ (item) => item.id }
            showsVerticalScrollIndicator={false}
            data = {data}
            renderItem = { ({ item }) => <List item = {item} /> }
        />
    )
}

export default Feed