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

</View>
        <View>
          <Text style={{ fontSize: 28, paddingTop: 40 , fontWeight:'bold'}}>Ongoing Task</Text>
        </View>
        <View style={{ flexDirection: 'column', paddingTop: 10 }}>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Update school administration system</Text>
          </View>

          <View style={styles.task} >
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Developing web app</Text>
          </View>

          <View style={styles.task} backgroundColor='white' >
            <Text style={{ fontSize: 20, fontWeight:'bold'}}>listening to music</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20,fontWeight:'bold' }}>Push Ups</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Make collage art</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Make sculptures</Text>
          </View>

          <View style={styles.task} backgroundColor='white' >
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Watching movies</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Doing yoga</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Learning about AI</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20,fontWeight:'bold' }}>Testing new food delivery app</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Push ups</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20,fontWeight:'bold' }}>Watching football</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>playing video games</Text>
          </View>

          <View style={styles.task} backgroundColor='white' >
            <Text style={{ fontSize: 20,fontWeight:'bold' }}>Machine learning</Text>
          </View>

          <View style={styles.task} backgroundColor='white'>
            <Text style={{ fontSize: 20, fontWeight:'bold' }}>Researching the side effects of AI</Text>
          </View>


        </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {paddingTop:76,
                padding:30, 
                backgroundColor: '#F7F0E8'
                
  
  },

  firsttab:{
    flexDirection:'row',
    justifyContent: 'space-between',
    
  }
,   searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    width: 40,
    padding: 5,
  },

  searchIcon: {
    padding: 5,
  },

  input: {
    width: 200,
    fontSize: 16,
    left: 10,
    backgroundColor: 'white',
   
    
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
    width: 250,
    padding: 15,
    marginRight: 20,

  },

  task: {
    marginBottom: 20,
    height: 100,
    
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    padding: 15,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  Image: {
    height: 100,
    width: 100,
  }

});

 