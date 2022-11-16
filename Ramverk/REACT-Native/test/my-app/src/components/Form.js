import React from 'react'
import {StyleSheet ,TextInput, Text, View, TouchableHighlight } from 'react-native'
import { useState, useEffect} from 'react'
export const Form = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const submit = async()=>{
        const response = await fetch('https://localhost:8000/auth', {
            method: 'POST',
            body: JSON.stringify({
                username : username,
                password: password
            })
        })
        if(response.status === 200){
            const data = await response.json()
        }else{
            setError(true)
        }
    }




  return (
    <View style={styles.form}>
       <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={setUsername}/>
       <TextInput style={styles.input}  placeholder='Password' value ={password} onChangeText={setPassword}/>
       <TouchableHighlight>
        <Text style={styles.btn}>Login</Text>
    </TouchableHighlight>
    </View>
  )
}


const styles = StyleSheet.create({

    form: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 200,
      color: 'red'
    },
    btn: {
        color: 'yellow',
      fontSize: 15,
      height:30,
      borderRadius: 10 ,
      borderWidth: 1,
      padding: 5,
      margin: 10,
    },
    input: {
        borderWidth: 1,
        width: 150,
        textAlign: 'center'

    }
  });