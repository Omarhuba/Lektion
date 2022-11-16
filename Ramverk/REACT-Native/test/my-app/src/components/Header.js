import { StyleSheet, Text, View } from 'react-native';



export const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}> Todo Application</Text>
    </View>
    )
}

const styles = StyleSheet.create({

    header:{
    margin: 0,
    height: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'black',
      fontSize: 35
    },
    redText: {
      color: 'red'
    }
  });
