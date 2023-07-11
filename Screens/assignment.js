import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useState,useEffect } from "react";
import { TextInput, View,StyleSheet, Button,Text, FlatList } from "react-native"
import { db } from "../firebaseconfig";



const  Datahandle=()=>{
const [Name,setName]= useState("");
const [type,setType]= useState("");
const [deprt,setDeprt]= useState("");
const [age, setAge] = useState("");
const [data,setData] = useState({
  name:"",
  Type:"",
  deprt:"",
  age:""
});



const writedata= async ()=>{

try {
     await setDoc(doc(db,'Employees','first'),{
        name:Name,
        Type:type,
        deprt:deprt,
        age:age
    })
   alert('Data Saved Successfully')
} catch (error) {
    console.log(error);
    
}
}

const readdata= async ()=>{

    try {
        
        const ref = doc(db,'Employees','first')
        const info= await getDoc(ref); 
       
console.log(info.data());
setData(info.data());
console.log(data.name)
      
    } catch (error) {
        console.log(error)
    }
}


    return(
      <View>
        <TextInput 
        placeholder="Employee Name"
        style={styles.input}
        value={Name}
        onChangeText={setName}/>
        <TextInput 
        placeholder="Employee type"
        style={styles.input}
        value={type}
        onChangeText={setType}/>
        <TextInput 
        placeholder="department"
        style={styles.input}
        value={deprt}
        onChangeText={setDeprt}/>
        <TextInput 
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}/>
      <Button 
      title="write data"
      onPress={writedata}/>
      <Button 
      
      title="read data"
      onPress={readdata}/>
    
                
            <Text>Employee Name:  :{data.name}</Text>
            <Text>Employee Type:    :{data.Type}</Text>
            <Text>Department:          :{data.deprt}</Text>
            <Text>Age:                         :{data.age}</Text>
      
      </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "ffff",
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
  });
export default Datahandle;


  
  
 