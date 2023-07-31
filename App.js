import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/login';
import Signup from './Components/signup';
import Homepage from './Screens/Home';
import StoreItems from './Components/Asyncstorage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Doctorsignup from './Components/doctor';
import Datahandle from './Screens/assignment';
import Doctor_Categories from './Components/doctor_categories';
import Display_doc from './Screens/view_doctor';
import Cardiology from './Components/cardiology';
import { Provider as PaperProvider } from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';

import Doctors from './Components/Doctors';
import Profile from './Components/cardiology';


const Drawer = createDrawerNavigator();


const Stack=createNativeStackNavigator();


const Tab = createMaterialBottomTabNavigator();

 function MyTabs() {
  return (
    <Tab.Navigator  barStyle={{backgroundColor:"#93C4CB"}}>
      <Tab.Screen name="signup" component={Signup}  options={{
          tabBarLabel: 'Signup',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="login" component={Login} options={{
          tabBarLabel: 'login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
      }


  function MyDrawer({navigation}) {
   const [state,setState]=useState([])
  
    const state_update =async()=>{
      const arr=[];
          try {
              const snapshot=await getDocs(collection(db,"Doctor"));
           snapshot.forEach(doc=>{
           
          arr.push(doc.id);
           })
          } catch (error) {
              console.log(error)
          }
        state_update;
     setState(id=arr);
     console.log(state);
  }
    return (
      <Drawer.Navigator  screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 260,
        },
      }}>
       
        <Drawer.Screen  name="Profile" component={Profile}  />
        <Drawer.Screen  name="Pediatricians" component={Doctors} initialParams={{name:"Pediatrician"}} />
        <Drawer.Screen  name="Nephrologists" component={Doctors} initialParams={{name:"Nephrologist"}} />
        <Drawer.Screen  name="General Physcians" component={Doctors} initialParams={{name:"General Physcians"}}  />
        <Drawer.Screen  name="Cardiologists" component={Doctors} initialParams={{name:"Cardiologists"}} />
        <Drawer.Screen  name="Gyneacologists" component={Doctors} initialParams={{name:"Gyneacologists"}} />
        <Drawer.Screen  name="Oncologist" component={Doctors} initialParams={{name:"Oncologist"}} />
        <Drawer.Screen  name="Infectious Disease Physicians" component={Doctors} initialParams={{name:"Infectious Disease Physicians"}} />
        <Drawer.Screen  name="Pulmonologists" component={Doctors} initialParams={{name:"Pulmonologists"}} />
        <Drawer.Screen  name="Endocrinologists" component={Doctors} initialParams={{name:"Endocrinologist"}} />
        <Drawer.Screen  name="Gastroenterologists" component={Doctors} initialParams={{name:"Gastroenterologist"}} />
        
        
        
        
      </Drawer.Navigator>
    );
  }

export default function App() {
  return (
    <PaperProvider>

    <NavigationContainer >
    <Stack.Navigator   >
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Get_Started" component={MyTabs} />
      <Stack.Screen name="Doctor Registration" component={Doctorsignup} />
      <Stack.Screen name="user_profile" component={MyDrawer} options={{ headerShown: false }} /> 
    </Stack.Navigator>
     
    </NavigationContainer>
    </PaperProvider>
    //  <View style={styles.container}>
    //   <MyDrawer/>
    //  </View> 

 );
}

const styles = StyleSheet.create({
  container: {
    
      flex: 1,
      backgroundColor: "#93C4CB",
      // backgroundColor: "#ffffff",
     
      padding: 10,
      paddingTop:50,
    alignItems: 'center',
    
   
  },
});
