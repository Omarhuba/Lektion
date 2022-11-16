import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';



export const Footer = () => {
  return (
    <TouchableHighlight style={styles.footer}>
        <Text style={styles.btn}>Add Todo</Text>
    </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

    footer:{
    margin: 20,
    height: 50,
      backgroundColor: '#red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      color: 'yellow',
      fontSize: 25,
      height:50,
      borderRadius: 10 ,
      borderWidth: 2,
      padding: 5,
      margin: 10,

    }
  });
