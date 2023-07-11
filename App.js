import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/login';
import Signup from './Components/signup';
import Homepage from './Screens/Home';
import StoreItems from './Components/Asyncstorage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Doctorsignup from './Components/doctor';
import Datahandle from './Screens/assignment';


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
export default function App() {
  return (
    // <NavigationContainer >
    // <Stack.Navigator   >
    //   <Stack.Screen name="Home" component={Homepage} />
    //   <Stack.Screen name="Get_Started" component={MyTabs} />
    //   <Stack.Screen name="Doctor Registration" component={Doctorsignup} />
    // </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
     <Datahandle/>
    </View>

 );
}

const styles = StyleSheet.create({
  container: {
    
      flex: 1,
      // backgroundColor: "#93C4CB",
      backgroundColor: "#ffffff",
     
      padding: 10,
      paddingTop:50,
    alignItems: 'center',
    
   
  },
});
