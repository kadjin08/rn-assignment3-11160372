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

      <View style={styles.searchRow}>
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="search" size={21} color="black" backgroundColor="white"/>
          <TextInput style={styles.input} placeholder='Search'></TextInput>
        </View>
        <Image source={require('./assets/icon45.jpg')} style={{ width: 45, height: 45 }} />
        </View>


      <View style={styles.content}>

        <View>
          <Text style={{ fontSize: 28, paddingTop: 40, fontWeight:'bold'}}>Categories</Text>
        </View>
        <View style={styles.generalContent}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={{ flexDirection: 'row', paddingTop: 15 }}>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21, fontWeight:'bold'}}>Exercise</Text>
                <Text>7 tasks</Text>
                <Image source={require('./assets/young woman working 555.png')} style={{ padding: 0, marginHorizontal: 0 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21, fontWeight:'bold' }}>Research</Text>
                <Text>10 tasks</Text>
                <Image source={require('./assets/young woman working1.1.png')} style={{ padding: 10, marginHorizontal: 20 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21 , fontWeight:'bold'}}>Entertainment</Text>
                <Text>8 tasks</Text>
                <Image source={require('./assets/entertainment copy.jpg')} style={{ padding: 5, marginHorizontal: 5 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21, fontWeight:'bold' }}>Art</Text>
                <Text>5 tasks</Text>
                <Image source={require('./assets/pottery art.png')} style={{ padding: 10, marginHorizontal: 20 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21,fontWeight:'bold' }}>Work</Text>
                <Text>15 tasks</Text>
                <Image source={require('./assets/corporate work.png')} style={{ padding: 5, marginHorizontal: 50 , width:100}} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21, fontWeight:'bold' }}>Virtual Reality</Text>
                <Text>3 tasks</Text>
                 <Image source={require('./assets/vr image.png')} style={{ padding: 10, marginHorizontal: 20 }} /> 
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21,fontWeight:'bold' }}>Product testing</Text>
                <Text>6 tasks</Text>
                <Image source={require('./assets/product testing 27.png')} style={{ padding: 50, marginHorizontal: 20 }} />
              </View>
            </View>

          </ScrollView>


</View>
        </ScrollView>
  );
}