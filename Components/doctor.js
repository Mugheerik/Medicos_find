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

const Doctorsignup = ({navigation}) => {
  const [Register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [Category, setCategory] = useState("");


  const setTextInputValues = (values) => {
    const inputs = useRef(React.createElement('div'));
  
    for (const [name, value] of Object.entries(values)) {
      const input = useRef(React.createElement('input', {
        name,
        value,
      }));
  
      inputs.current.appendChild(input.current);
    }
  
    return inputs.current;
  };

  
  
  const handleDoctor = () => {setRegister(true)};
  const handleChange = (itemValue) => {
    setCategory(itemValue);
    console.log(itemValue);
 
};
  const categories =[
    { id:1,label: "General Physician", value: "General Physician"},
    {id:2,label: "Pediatrician", value: "Pediatrician"},
    {id:3,label: "Gynecologist", value: "Gynecologist"},
    {id:4,label: "Cardiologist", value: "Cardiologist"},
    {id:5,label: "Oncologist", value: "Oncologist"},
    {id:6,label: "Gastroenterologist", value: "Gastroenterologist"},
    {id:7,label: "Pulmonologist", value: "Pulmonologist"},
    {id:8,label: "Infectious Disease Physician", value: "Infectious Disease Physician"},
    {id:9,label: "Nephrologist", value: "Nephrologist"},
    {id:10,label: "Endocrinologist", value: "Endocrinologist"},
    {id:11,label: "Pulmonologist", value: "Pulmonologist"},
    {id:12,label: "Endocrinologist", value: "Endocrinologist"},
  ];
  
  const mapItemsToOptions = (items) => {
    return items.map((item) => {
      return (
        <Picker.Item style={styles.picker}
          key={item.id}
          value={item.value}
          label={item.label}
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
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
              value={email}
            />
            <TextInput
              placeholder="Clinic Location"
              style={styles.input}
              autoCapitalize="none"
              value={location}
            />
        
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
      />
      <Text style={{marginTop:10}}>Select your category</Text>
      <Picker
        selectedValue={Category}
        onValueChange={handleChange}
        style={styles.input}
        
      >
        {mapItemsToOptions(categories)}
        
        
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
