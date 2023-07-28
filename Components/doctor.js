import firestore from '@firebase/firestore';
import React, { useState } from "react";
import {Picker } from "@react-native-picker/picker"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,

} from "react-native";
import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';
import { db } from "../firebaseconfig";
import { addDoc, collection,setDoc,doc,getDocs } from "firebase/firestore";

const Doctorsignup = ({navigation}) => {
  const [Register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [Category, setCategory] = useState("");

  const [state,setState]=useState([""])
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
          
       setState(value=arr);
       
    }
  
state_update();
  
  
  
 

  
  

  const adddata=async()=>{

   
   try {
   
    
    await addDoc(db.collection("Doctor").doc(Category)),{
      Name:name,
      Email:email,
     Password:password,
     Location:location,
    Category:Category,
 }
   } catch (error) {
    console.log(error);
   }
      
    
    

    // await setDoc(doc(db,"Doctor","User_Data"), {
    //   Name:name,
    //   Email:email,
    //   Password:password,
    //   Location:location,
    //   Category:Category,

    // });
    // console.log("data added");

   }
  const handleChange = (itemValue) => {
    setCategory(itemValue);
    console.log(itemValue);
    
 
};


    
 
    
const handleDoctor = () => {

  adddata();
    
  // const auth =  getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     setRegister(true);
      
  //   adddata();
  //     const user = userCredential.user;
  //     console.log(user.displayName)
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //    console.log(errorCode,errorMessage)
  //   });
    };
 
  




    
    
 
  const mapItemsToOptions = (items) => {
    return items.map((item) => {
      return (
        <Picker.Item style={styles.picker}

          value={item.id}
          label={item.id}
        />
      );
    });
  };

 

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
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Clinic Location"
              style={styles.input}
              autoCapitalize="none"
              value={location}
              onChangeText={setLocation}
            />
        
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={{marginTop:10}}>Select your category</Text>
      <Picker
        selectedValue={Category}
        onValueChange={handleChange}
        style={styles.input}
        
      >
        {mapItemsToOptions(state)}
        
        
      </Picker>
    




           
            <TouchableOpacity
              style={styles.button}
              onPress={handleDoctor}
            >
              <Text style={styles.buttonText}>Signup As Doctor</Text>
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
    color: "#93C4CB",
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
  
    picker: {
      width: 200,
      
    },
    pickerItem: {
      padding: 10,
    },
  
});

export default Doctorsignup;
