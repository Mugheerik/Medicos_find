import { FlatList, Text, View ,Button,Item} from "react-native"
import { getDocs,collection } from "firebase/firestore";
import { StyleSheet } from "react-native";
import { db } from "../firebaseconfig";
import { useEffect, useState } from "react";



const Display_doc=()=>{
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
          
       setState(id=arr);
       console.log(state);
    }


useEffect(state_update,[]);
// const renderItem=(item)=>{
//     state_update();
//     return(
//         <View>
//             <Text>{item.id}</Text>
//         </View>
//     )
    const renderItem = ({item}) => {
       
         state_update;
        return (
          <View style={styles.item} >
                     <Text >{item.id}</Text>
            
          
          </View>
        );
      };
       
      return(
          <View >
          
      
      <FlatList
      
      data={state}
      renderItem={renderItem}
      keyExtractor={item=>item.id}/>
                    </View>
    )
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
    item: {
        marginTop: 5,
        padding: 10,
        backgroundColor: "#a23320" ,
        color: "#a23320",
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        
      },
      title: {
        fontSize: 32,
      },
  });
export default Display_doc;