import { getDocs } from "firebase/firestore"
import { useState } from "react";
import { View,Text } from "react-native"

const Cardiology=()=>{
    const [data,setData]=useState([]);
const arr=[];
const readdata= async()=>{
const snapshot= await getDocs(doc(db,"Cardiology"));
snapshot.forEach(doc=>{
    arr.push({id:doc.data()});
},
setData(arr)
)
}

    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}
export default Cardiology;