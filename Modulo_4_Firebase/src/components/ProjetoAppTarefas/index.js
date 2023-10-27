import { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Keyboard, ActivityIndicator } from 'react-native'

import LoginECadastro from './components/LoginECadastro'
import TaskList from './components/TaskList'

import app from '../../firebase/firebaseConnection'

import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore'

import Feather from '@expo/vector-icons/Feather'

const LogineCadastro = () => {
    const firestore = getFirestore(app)

    const [user, setUser] = useState(null)
    const taskRef = useRef(null)

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [key, setKey] = useState('')

    useEffect(() => {
      const getUser = () => {
        if (!user) {
            return;
        }
        pegaDados()
      }

      getUser()
    }, [user])
    
    const pegaDados = async () => {
        try{
            setLoading(true)
            const q = query(collection(firestore, 'tarefas', user, 'tarefasUsuario'))
            const querySnapshot = await getDocs(q)

            setTasks([])

            querySnapshot?.forEach((doc)=>{
                let data = {
                    'key': doc.id,
                    'name': doc.data().name
                }
                
                setTasks(oldArray => [...oldArray, data].reverse())
            })
            setLoading(false)
        }
        catch(e){
            alert(e)
        }
    }

    const handleAdd = async () => {
        if (taskRef.current.value === '') {
            alert('Digite algo.')
            return
        }
        else if (key != '') {
            const userTasksRef = doc(firestore, 'tarefas', user, 'tarefasUsuario', key)
            const docData = {
                'name': taskRef.current.value
            }
            await setDoc(userTasksRef, docData)
            .then(()=>{
                taskRef.current.value = ''
                setKey('')
                Keyboard.dismiss()
                
                alert('Atualizou com sucesso.')

                pegaDados()
                
                return
            })
            .catch((e)=>{
                alert(`Erro ${e}`)
            })
        }
        else {
            try {
                const userTasksRef = doc(firestore, 'tarefas', user)
                const newTaskRef = collection(userTasksRef, 'tarefasUsuario')
                const docData = {
                    'name': taskRef.current.value
                }
                
                addDoc(newTaskRef, docData)
                .then((addedDocRef)=>{
                    const data = {
                        'key': addedDocRef.id,
                        'name': taskRef.current.value
                    }
                    
                    setTasks(oldTasks => [... oldTasks, data].reverse())
                    pegaDados()
                })
                .catch((e)=>{
                    alert(`Erro, ${e}`)
                })
                
                Keyboard.dismiss()
                taskRef.current.value = ''
            } catch (e) {
                alert(`Erro ${e}`)
            }
        }
    }

    const handleEdit = async (data) => {
        setKey(data.key)
        taskRef.current.value = data.name
        taskRef.current.focus()
    }

    const cancelEdit = () => {
        setKey('')
        taskRef.current.value = ''
        Keyboard.dismiss()
    }

    const handleDelete = async (taskKey) => {
        try {
            const userTasksRef = doc(firestore, 'tarefas', user)
            const taskDocRef = doc(userTasksRef, 'tarefasUsuario', taskKey)

            await deleteDoc(taskDocRef)
            .then(()=>{
                const updatedTasks = tasks.filter( (item)=>item.key !== taskKey )
                setTasks(updatedTasks)

                alert('Apagou com sucesso.')
            })
            .catch((e)=>{
                alert(`Erro ${e}`)
            })
        } catch (e) {
            alert(`Erro ${e}`)
        }
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
                {key &&
                    <View style={{flexDirection: 'row', marginBottom: 8}}>
                        <TouchableOpacity onPress={ ()=>cancelEdit() }>
                            <Feather name='x-circle' size={20} color='red'/>
                        </TouchableOpacity>
                        <Text style={{marginLeft: 5, color: 'red'}}>
                            Você está editando uma tarefa.
                        </Text>
                    </View>
                }

                <View style={styles.taskContainer}>
                    <TextInput style={styles.input} placeholder={'O que vamos fazer hoje?'} ref={taskRef} autofocus />
                    <TouchableOpacity style={styles.addBtn} onPress={()=>handleAdd()} >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                {loading ?
                    (<ActivityIndicator size='large' color='lightblue' />) :
                    (<FlatList
                        data = {tasks}
                        keyExtractor = { item => item.key }
                        renderItem = { ({ item })=>(
                            <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
                        )}
                    />)
                }
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
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default LogineCadastro