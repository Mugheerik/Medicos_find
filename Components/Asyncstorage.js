import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {View,Button} from "react-native"



class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}
const storeStringData= async (value)=>{
    try {
        await AsyncStorage.setItem("@storage_key",value)
    } catch (error) {
        console.log(error);
    }
}
const getStringData = async ()=>{

    try {
        const data =await AsyncStorage.getItem("@storage_key")
        if (data!==null){
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
const storeObejectData = async (value)=>{
    try {
        const object = JSON.stringify(value)
        await AsyncStorage.setItem("@storage_object_key",object)
    } catch (error) {
        console.log(error)
    }
}
const getObjectData = async () =>{
    try {
        var object= await AsyncStorage.getItem("@storage_object_key")
        object= object!==null? JSON.parse(object):null
        console.log(object.name,"",object.age);
    } catch (error) {
        console.log(error)
    }
}

export default StoreItems =()=>{
    return(
<View>
    <Button title="store string" onPress={()=>storeStringData("hello")}  />
    <Button  title="get String" onPress={()=>getStringData()} />
    <Button title="store class object" onPress={()=>storeObejectData(new Person("mugheer",23))}  />
    <Button  title="store object" onPress={()=>storeObejectData({cityname:"abbottabad",college:"twpsc"})} />
    <Button title="get object "onPress={()=>getObjectData()} />  
</View>

    )
}