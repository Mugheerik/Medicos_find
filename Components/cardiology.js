import { getAuth ,signOut} from "firebase/auth";
import { getDocs } from "firebase/firestore"
import { useState } from "react";
import { View,Text } from "react-native"
import { StyleSheet } from "react-native";
const Profile=({navigation})=>{
    

const data =getAuth().currentUser;



const auth = getAuth();
signOut(auth).then(() => {
  navigation.navigate('Home');
}).catch((error) => {
  // An error happened.
});



    return(
        <View style={styles.container}>
            <Text style={styles.title}> User Email:{data.email}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#93C4CB",
        padding: 10,
        paddingTop:50,
      alignItems: 'center',
      
    },
   
    title: {
      color: "#000",
      fontSize: 20,
      fontWeight: "bold",
      alignItems:"center"
    },
    form: {
      marginTop: 20,
    },
    input: {
      height: 40,
      width: 200,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      
    },
    button: {
      backgroundColor: "#000",
      height: 40,
      
      borderRadius: 5,
      marginTop: 20,
     
    },
    buttonText: {
      color:"#93C4CB",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      padding:4,
      
    },
    buttondoc: {
      color: "#000",
      fontSize: 10,
      textAlign: "center",
      
    },
    buttonnew: {
      color: "#000",
      fontSize: 15,
      textAlign: "center",
      marginTop:10,
      
    },
  });
export default Profile;