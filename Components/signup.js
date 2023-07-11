import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";

const Signup = ({navigation}) => {
  const [Signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(true);
  };
  const handleDoctor = () => navigation.navigate('Doctor Registration');

 

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Signup</Text>
        </View>
        
          <View style={styles.form}>
            <TextInput
              placeholder="UserName"
              style={styles.input}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignup}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              
              onPress={handleDoctor}
            >
              <Text style={styles.buttondoc}>Register As A Doctor</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#93C4CB",
    padding: 10,
    paddingTop:50,
  alignItems: 'center',
  },
  header: {
    height: 50,
   
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
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
    width: "100%",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding:4
  },
  buttondoc: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding:4
  },
});

export default Signup;
