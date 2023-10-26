import { useRef, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native'

import LoginECadastro from './components/LoginECadastro'
import TaskList from './components/TaskList'

import app from '../../firebase/firebaseConnection'

import { doc, getFirestore, setDoc } from 'firebase/firestore'

const LogineCadastro = () => {
    const firestore = getFirestore(app)

    const [user, setUser] = useState(null)
    const taskRef = useRef()

    const [tasks, setTasks] = useState([])

    const handleEdit = async (data) => {
        alert("Clicou em "+data.name);
    }

    const handleAdd = async () => {
        if (taskRef.current.value === '') {
            alert('Digite algo.')
            return
        }
        else {
            let docRef = doc(firestore, 'tarefas', user)
            let key = docRef.id
            let docData = {
                'name': taskRef.current.value
            }
            
            await setDoc(docRef, docData)
            .then(()=>{
                const data = {
                    'key': key,
                    'name': taskRef.current.value
                }
                
                setTasks(oldTasks => [... oldTasks, data])
            })
            .catch((e)=>{
                alert(`Erro, ${e}`)
            })
            
            Keyboard.dismiss()
            taskRef.current.value = ''            
        }
    }

    const handleDelete = async (key) => {
        alert(key)
    }
    
    if (!user) {
        return(
            <SafeAreaView style={styles.container}>
                <LoginECadastro changeStatus={(user)=>setUser(user)} />
            </SafeAreaView>
        )
    }
    else {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.taskContainer}>
                    <TextInput style={styles.input} placeholder={'O que vamos fazer hoje?'} ref={taskRef} autofocus />
                    <TouchableOpacity style={styles.addBtn} onPress={()=>handleAdd()} >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data = {tasks}
                    keyExtractor = { item => item.key }
                    renderItem = { ({ item })=>(
                        <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
                    )}
                />

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: '#f2f6fc'
    },
    taskContainer: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#141414',
        height: 45
    },
    addBtn: {
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        height: 45,
        paddingHorizontal: 14,
        borderRadius: 5
    },
    btnText: {
        color: 'lightgreen',
        fontweight: 'bold'
    }
})

export default LogineCadastro