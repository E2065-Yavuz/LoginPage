import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput, TouchableOpacity,textContentType,
} from 'react-native';
const App = () =>  {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image source={require("./images/shopping.png")}
        style={{width:150,height:150}}/>
        </View>
        <View style={{flex:1}}>
        <TextInput style={styles.InputContainer} placeholder="Eposta giriniz" keyboardType="email-address"/>
        <TextInput style={styles.InputContainer} secureTextEntry={true} placeholder="Sifre giriniz" keyboardType="number-pad"/>
        </View>
        <View style={{flex:1, alignItems:"center"}}>
          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.textContainer}>Giris Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.textContainer}>Kayıt ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#80CBC4",
    justifyContent:"center"
  },
  InputContainer:{
    padding:10,
    margin:5,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:"white",  
  },
  ButtonContainer:{
    backgroundColor:"#546E7A",
    padding:10,
    margin:10,
    width:150,
    borderRadius:10,
  },
  imageContainer:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",
  },
  textContainer:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  }
});
export default App;