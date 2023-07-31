import { collection, collectionGroup, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { FlatList, View ,Text,TouchableOpacity} from "react-native"
import { db } from "../firebaseconfig"
import { StyleSheet } from "react-native"
import { ImageBackground } from "react-native"


const Doctors= ({route})=>{
    const [selectedId, setSelectedId] = useState();
const [state,setState]=useState([]);

 const datat=route.params.name;
    const getData= async()=>{
 const arr=[];
try {
    // const docref = doc(db,"Doctors","Pediatrician")
    // const colref= collection(docref,"doc_users")
    const data = await getDocs(collection(db,"Doctor",datat,"doc_users"))
    
    data.forEach(doc=>{
       arr.push(doc.data())
       
    })
    setState(id=arr);
   
} catch (error) {
    console.log(error)
}

    }


getData();

const Item = ({item , onPress, backgroundColor, textColor,key}) => (
    <TouchableOpacity onPress={onPress}  style={[styles.item, {backgroundColor}]}>
   
<Text style={[styles.title, {color: textColor}]}>Name:{item.Name}</Text>
  
      <Text style={[styles.title, {color: textColor}]}>Phone:{item.Phone}</Text>
      <Text style={[styles.title, {color: textColor}]}>Location:{item.Location}</Text>
    </TouchableOpacity>
  );
const renderItem=({item})=>{
    const backgroundColor =  'white';
    const color = 'black';
    return(
     <Item
     key={item.id}
     backgroundColor={backgroundColor}
     textColor={color}
     item={item}
     onPress={() => setSelectedId(item.id)}
     />
    )

}


return(
   <View style={styles.container}>
      <ImageBackground
    source={require('../assets/R.jpg')}
    style={{
      backgroundColor: '#fc0',
      width: '100%', // applied to Image
      height: '100%' 
    }}
    imageStyle={{
      resizeMode: 'cover' // works only here!
    }}
>
<FlatList 
    keyExtractor={(item)=>item.id}
    data={state}
    renderItem={renderItem}
    extraData={selectedId}
    
    />
</ImageBackground>
    
   </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    item: {
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 8,
    },
    title: {
      fontSize: 20,
    },
  });
export default Doctors;