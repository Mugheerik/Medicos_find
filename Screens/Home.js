import {StyleSheet, View ,Text, Image ,TouchableOpacity} from "react-native"

import Login from "../Components/login";
import Signup from "../Components/signup";



  const Homepage=({navigation})=>{
    const handleSignup=()=>navigation.navigate('Get_Started')
 
    return(
        <View style={styles.container}>
            
            <Image source={require('../assets/R.jpg')} style={{width:260,height:260}} />
            <Text style={styles.title}>
                WELCOME TO MEDICOS FIND
            </Text>
        
            <Text style={styles.buttondoc}>
         Find and book appointments with doctors of your choice
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignup}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            
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
  export default Homepage;