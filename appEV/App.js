import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App() {
  return (
    <ScrollView style={styles.container}>
<View style={styles.firsttab}>

<View style={styles.firsttexttab}>
      <Text style={{fontSize: 50}}>Hello, Devs</Text>
      <Text>14 tasks today</Text>
      </View>


      <Image source={require('./assets/usericon.jpg')} style={{width: 30, height: 30,borderRadius:100,backgroundColor: 'white'}}/>

      </View>


        </ScrollView>
  );
}