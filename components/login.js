import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isSelected, setSelection] = useState(false);

  const handleLogin = ()=> {
    console.log(email);
    console.log(isSelected);
    setEmail('');
  };

  const 

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Login</Text>

        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#000"
          autoCapitalize = "none"
          value={email}
          onChangeText = {(newValue)=> setEmail(newValue)}
        />
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#000"
          autoCapitalize = "none"
          value={code}
          onChangeText = {(newValue)=> setCode(newValue)}
          secureTextEntry={isSelected}
        />
        <View style={styles.checkboxContainer}> 
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Show password</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },

  text: {
    fontSize: 30,
    marginBottom: 50,
  },
  input: {
    margin: 8,
    height: 60,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    width: 370,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#006994',
    padding: 10,
    width: 370,
    borderRadius: 10,
    height: 45,
    marginTop: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
