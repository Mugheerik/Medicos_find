import { addDoc, collection, getDocs ,doc, setDoc} from "firebase/firestore";
import { useState } from "react";
import { Button, FlatList, SafeAreaView,View,Text } from "react-native";
import { db } from "../firebaseconfig";
import { StyleSheet } from "react-native";


const Doctor_Categories=()=>{


    
    
    const [data,setData]=useState({
        count:1,
        value:"",
    });

    const datared=()=>{
        console.log(data)
    }
    const readdata=async()=>
    {

  try {
    
        
     const querySnapshot = await getDocs(collection(db, "Doctor"));
         querySnapshot.forEach(doc=>{
            setData((data.count)=data.count+1,data.value=doc.id)
            console.log(data)
            
        })
        } catch (error) {
          console.log(error);
        }
        }
    
    
   
   
const renderItem=(item)=>{
    <SafeAreaView style={styles.container}>
        <Text >{item.value}</Text>
    </SafeAreaView>
}
return(
    <View>
        <Button  title="adddata"  onPress={datared}/>
        <Button onPress={readdata} title="data"/>
       <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={Item => Item.id}
       />
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
export default Doctor_Categories;