import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form } from './Form'



export  const Main = () => {
    const [loading, setLoading] = useState(false)

    useEffect(()=>{delay()}, [])

    const delay = ()=>{
      setTimeout(()=>{setLoading(!loading)}, 1000)
    }

  return (
      <View>

        {!loading && <View style={styles.body}>
        <Text style={styles.redText}>Welcome to Todo App....</Text>
        </View>}
        {loading && <View style={styles.body}>
        <Text style={styles.text}>Hello my app!</Text>
        <Form style={styles.form}/>
        </View>}
      </View>
  )
}

const styles = StyleSheet.create({

    body:{
      // flex: 1,
      height: 500 ,
      backgroundColor: '#aaa',
      alignItems: 'center',
    },
    text: {
      color: '#FFF'
    },
    redText: {
      color: 'red',
      fontSize: 25
    },
    form: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
      color: 'red'

    }
  });
