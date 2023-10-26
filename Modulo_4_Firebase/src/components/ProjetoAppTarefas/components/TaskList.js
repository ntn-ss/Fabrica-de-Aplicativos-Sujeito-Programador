import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { FontAwesome } from '@expo/vector-icons';

const TaskList = ({ data, deleteItem, editItem }) => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => alert('Clicou')}>
            <Text style={styles.taskText}>{data.key}</Text>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={() => alert('Clicou')}>
            <Text style={styles.taskText}>{data.name}</Text>
        </TouchableWithoutFeedback>
        
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 10}}>
                <MaterialCommunityIcons name='delete-forever' size={25} color='red' onPress={() => deleteItem(data.key)} />
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 10}}>
                <FontAwesome name="pencil-square-o" size={24} color="yellow" onPress={() => editItem(data)} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#141414',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
    },
    taskText: {
        color: '#fff',
        paddingRight: 10,
        fontWeight: 'bold',
    }
})

export default TaskList