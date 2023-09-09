import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

function Feed() {
  return (
    <View style={{flex:1, backgroundColor:'black' }}>
      <View style={styles.headcont}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' }} style={styles.logo}/>
        <View style={styles.headcont2}>
          <MaterialCommunityIcons name='facebook-messenger' size={30} style={styles.iconss} />
          <FontAwesome name='heart-o'  size={30} style={styles.iconss} />
        </View>
      </View>
      <View style={styles.storiescont}>
        <View style={styles.storiescont11}>
          <View style={styles.storiescont21}>
            <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/294208036_1264445867292725_2010018492174324742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGzupx6xjtwV7ceeN4o_fpDOyUzfabvEFY7JTN9pu8QVs8pkqiKKk-toPYHUxJFT6m9TUFUuFSR-pwVujXgCdwV&_nc_ohc=5kp-1Co-B-8AX81giKv&_nc_ht=scontent.fceb2-2.fna&oh=00_AfA719e2kRiYza1Rs_hG439_B64anyD4m1IwpDbLz3Yztg&oe=64FF4F62' }} style={styles.storiescont31}/>
            <View style={styles.storiescont4}>
                <View style={styles.storiescont5}>
                  <AntDesign name='pluscircle'  size={25} style={styles.addstory} />
              </View>  
            </View>
          </View>
          <View>
          </View>
        </View>
        <View style={styles.storiescont1}>
          <View style={styles.storiescont2}>
            <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/119860895_2673759106172274_2325025478171647553_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEhwgWVKEM2KQFSgFPBJkQAl_zeE5ocrAuX_N4TmhysC30iy8yr1MpKShJanaRJGfQi8EtaI-rgGmEJHV-UPy0Y&_nc_ohc=XXE5JI129UgAX_UxPHL&_nc_ht=scontent.fceb2-2.fna&oh=00_AfBDl6dCz2ZYBqnkyP6Q-D8TaUUe1XDFvfngaqNn6Njvdg&oe=65233D5B' }} style={styles.storiescont3}/>
          </View>
        </View>
        <View style={styles.storiescont1}>
          <View style={styles.storiescont2}>
            <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/162756621_1300634923651388_5946237028704454896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGlOCheb7FxI2fGbe4SbFxwPXVrw7TNqyI9dWvDtM2rIkkWeCRA6o5FUzMXO9C4KJA-BSY2TtR5h-N1XycvmLpn&_nc_ohc=869HuVwYliYAX9viROf&_nc_ht=scontent.fceb2-2.fna&oh=00_AfCkDRJjgs0VjQR6oG_jhJ7po2mRJrPGOObhB1xFdGXPQg&oe=65234018' }} style={styles.storiescont3}/>
          </View>
        </View>
        <View style={styles.storiescont1}>
          <View style={styles.storiescont2}>
            <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/375025682_1329639021288017_8983902562123898739_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGYmAoeBodU2D637qeaIxJeUV9gMWfEWPJRX2AxZ8RY8toDalco_ZPOMA3GwRiTIWVGeNzHrBJfzO5ACNv-9_L-&_nc_ohc=LlCSpdGK2YgAX8MEJzD&_nc_ht=scontent.fceb2-2.fna&oh=03_AdQUkLkIH-cuPQ3w6FGZmjiCkAMe2GelP5g49dZJrZj9Lg&oe=65231605' }} style={styles.storiescont3}/>
          </View>
        </View>
      </View>

      <View style={styles.storieslabel}>
          <View style={styles.storieslabel2}>
            <Text style ={styles.storiesname}>Your story</Text>
          </View>
          <View style={styles.storieslabel2}>
            <Text style ={styles.storiesname}>_lolaafloraa</Text>
          </View>
          <View style={styles.storieslabel2}>
            <Text style ={styles.storiesname}>_mrjlngm</Text>
          </View>
          <View style={styles.storieslabel2}>
            <Text style ={styles.storiesname}>jeeve.lane</Text>
          </View>
      </View>


      <View style={styles.usercont}>
        <View style={styles.usercont1}>
          <View style={styles.usercont2}>
            <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/119860895_2673759106172274_2325025478171647553_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEhwgWVKEM2KQFSgFPBJkQAl_zeE5ocrAuX_N4TmhysC30iy8yr1MpKShJanaRJGfQi8EtaI-rgGmEJHV-UPy0Y&_nc_ohc=XXE5JI129UgAX_UxPHL&_nc_ht=scontent.fceb2-2.fna&oh=00_AfBDl6dCz2ZYBqnkyP6Q-D8TaUUe1XDFvfngaqNn6Njvdg&oe=65233D5B' }} style={styles.usercont3}/>
          </View>
        </View>
        <Text style ={styles.username}>_lolaaflora</Text>
        <Entypo name='dots-three-vertical'  size={20} style={styles.icons3dots} />
      </View>

      <View style={styles.feedcontent}>
        <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/375021034_6796842080409118_6228409176377630753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFFN416-wCbiKCeGEzbTA1BoDi5ESymnPqgOLkRLKac-qTaUX9BBHXgyoyCMvgPyqhundRyJvuulFiaGgD_e66R&_nc_ohc=I5fcRi7hex4AX9KGFSD&_nc_ht=scontent.fceb2-2.fna&oh=03_AdSOPrw77ANTEuasMLPQGz45BryKAtYykcFSjjUTC_i3Rw&oe=652333FF' }} style={styles.image}/>
      </View>
      
      <View style={styles.feediconscont}>
        <FontAwesome name='heart'  size={25} style={styles.heart} />
        <FontAwesome name='comment-o'  size={25} style={styles.feedicons} />
        <Feather name='send'  size={25} style={styles.feedicons} />
        <Feather name='bookmark'  size={28} style={styles.bookmark} />
      </View>
      
      <View style={styles.reactscont}>
        <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/162756621_1300634923651388_5946237028704454896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGlOCheb7FxI2fGbe4SbFxwPXVrw7TNqyI9dWvDtM2rIkkWeCRA6o5FUzMXO9C4KJA-BSY2TtR5h-N1XycvmLpn&_nc_ohc=869HuVwYliYAX9viROf&_nc_ht=scontent.fceb2-2.fna&oh=00_AfCkDRJjgs0VjQR6oG_jhJ7po2mRJrPGOObhB1xFdGXPQg&oe=65234018' }} style={styles.reactscontprof}/>
        <Text style ={styles.reactstats}>Liked by _mrjlngm and 90 others</Text>
        
      </View>
      <View style={styles.contitle}>
          <Text style ={styles.constats}>_lolaafloraa</Text>
          <Text style ={styles.constats}>September 8</Text>
        </View>
      
    </View>
  );
}


function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
  );
}

function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function Reel() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({}) => ({
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'black',
      height: 70,
      justifyContent:'center',
      borderTopWidth: 0,
      
    },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused}) => (
            <Entypo name="home" color={focused ? 'white' : 'white'} size={29} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="search" color={focused ? 'white' : 'white'} size={29} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus-square-o" color={focused ? 'white' : 'white'} size={39} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Reel"
        component={Reel}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Ionicons name="film" color={focused ? 'white' : 'white'} size={34} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, }) => (
            <Image
                  style={{ width: size, height: size,borderRadius:400/2,marginBottom:'20px' }}
                  source={{
                    uri:
                      'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/294208036_1264445867292725_2010018492174324742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGzupx6xjtwV7ceeN4o_fpDOyUzfabvEFY7JTN9pu8QVs8pkqiKKk-toPYHUxJFT6m9TUFUuFSR-pwVujXgCdwV&_nc_ohc=5kp-1Co-B-8AX81giKv&_nc_ht=scontent.fceb2-2.fna&oh=00_AfA719e2kRiYza1Rs_hG439_B64anyD4m1IwpDbLz3Yztg&oe=64FF4F62',
                  }}
                />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
     
      <MyTabs/>
    
    </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
headcont:{
  flex:1,
  alignItems:'left',
  flexDirection:'row',
  height:10,
},
logo:{
  width: 150,
  height: 80,
  tintColor:'white',
  resizeMode: 'contain',
  marginLeft:'20px'
},
headcont2:{
  flex:1,
  flexDirection:'row-reverse',
  width: 150,
  height: 80,
  alignItems:'center'
},
iconss:{
  color:'white',
  marginLeft:'10px',
  marginRight:'20px'
},
addstory:{
  overflow:'visible',
  color:'#1E90FF',
  
},
storiescont:{
  flex:1,
  alignItems:'left',
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:20
},
storiescont11:{
  justifyContent:'center',
  alignItems:'center',
  width: 90,
  height: 90,
  borderRadius: 100 / 2,
  backgroundColor: "#404040",
},
storiescont21:{
  justifyContent:'center',
  alignItems:'center',
  width: 88,
  height: 88,
  borderRadius: 100 / 2,
  backgroundColor: "black",
},
storiescont31:{
  width: 80,
  height: 80,
  borderRadius: 100 / 2, 
},
storiescont4:{
  flex:1,
  width: 30,
  height: 30,
  borderRadius: 100 / 2,
  position:'absolute',
  bottom:0,
  right:0,
  backgroundColor: "black",
  zIndex:'1',
},

storiescont5:{
  justifyContent:'center',
  alignItems:'center',
  width: 30,
  height: 30,
  borderRadius: 100 / 2,
},

storiescont1:{
  justifyContent:'center',
  alignItems:'center',
  width: 90,
  height: 90,
  borderRadius: 100 / 2,
  backgroundColor: "green",
},
storiescont2:{
  justifyContent:'center',
  alignItems:'center',
  width: 85,
  height: 85,
  borderRadius: 100 / 2,
  backgroundColor: "black",
},
storiescont3:{
  width: 80,
  height: 80,
  borderRadius: 100 / 2, 
},
storieslabel:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:'16px',

  borderBottomColor: 'dimgray',
  borderBottomWidth: 0.1,
},
storieslabel2:{
  width: 80,
  alignItems:'center',
  marginTop:30
},
storiesname:{
  color:'white',
  fontSize: '10px',
},
image:{
  height:400,
  width:'100%',
  resizeMode:'cover',
  
},
usercont:{
  flex:1,
  flexDirection:'row',
  justifyContent:'flex-start',
  marginLeft:'10px',
  marginTop:'5px',
  marginBottom:'5px'
},
usercont1:{
  justifyContent:'center',
  alignItems:'center',
  width: 43,
  height: 43,
  borderRadius: 100 / 2,
  backgroundColor: "green",
},
usercont2:{
  justifyContent:'center',
  alignItems:'center',
  width: 40,
  height: 40,
  borderRadius: 100 / 2,
  backgroundColor: "black",
},
usercont3:{
  width: 35,
  height: 35,
  borderRadius: 100 / 2, 
},
username:{
  marginTop:'18px',
  marginLeft:'10px',
  color:'white',
  fontSize: '10px',
},
icons3dots:{
  color:'white',
  marginLeft:'240px',
  marginTop:'12px'
},
feediconscont:{
  flex:1,
  alignItems:'left',
  flexDirection:'row',
},
feedicons:{
  color:'white',
  marginLeft:'30px',
  marginTop:'15px'
},
bookmark:{
  color:'white',
  marginLeft:'195px',
  marginTop:'15px'
},
heart:{
  color:'red',
  marginLeft:'18px',
  marginTop:'15px'
},
reactscont:{
flex:1,
flexDirection:'row',
height:'10px',

},
reactscontprof:{
  height:22,
  width:22,
  borderRadius:400/2,
  marginLeft:'18px',
},
reactstats:{
  marginTop:'5px',
  marginLeft:'6px',
  color:'white',
  fontSize: '10px',
  height:1,
},
contitle:{
  flex:1,
  flexDirection:'column',
},
constats:{
  alignSelf:'flex-start',
  marginLeft:'18px',
  color:'white',
  fontSize: '10px',
}
});
