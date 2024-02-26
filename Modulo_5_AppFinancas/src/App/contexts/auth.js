// hooks
import { createContext, useEffect, useState } from "react";
import { auth, firestore } from '../services/firebaseConn'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext({})

import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const loadStorage = async() => {
        const storageUser = await AsyncStorage.getItem('Auth_user')
        
        if (storageUser) {
          setUser(JSON.parse(storageUser))
          setLoading(false)
        }
        
        loadStorage()
        setLoading(false)
      }
    }, [])

    const signIn = async(email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
      .then(async (value)=>{
        const uid = value.user.uid
        const docRef = await doc(firestore, 'users', uid)
        
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()){
          const data = {
            uid,
            nome: docSnap.data().nome,
            email: value.user.email
          }

          setUser(data)
          storageUser(data)
        }
        
      })
      .catch((err)=>alert(err.code))
    }

    const signUp = async (email, password, nome) => {
      await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value)=>{
        const uid = value.user.uid;
        const docRef = doc(firestore, 'users', uid)
        await setDoc(docRef, {
          saldo: 0,
          nome, 
        })
        .then(()=>{
          const data = {
            uid,
            nome,
            email: value.user.email
          }
          setUser(data)
          storageUser(data)
        })
        .catch((err)=>alert(err.code))
      })
    }

    async function storageUser(data) {
      await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    async function signOut(){
      await auth.signOut()
      await AsyncStorage.clear()
      .then(()=>{
        setUser(null)
      })
      .catch((err)=>alert(err))
    }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signIn, signOut }}>
        {children}
    </AuthContext.Provider> 
  );
};

export default AuthProvider; 