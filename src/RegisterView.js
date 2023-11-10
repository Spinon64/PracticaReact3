import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {Alert,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";

export default class LoginView extends Component {
  state = {
    email: "",
    passwordInput1: "",
    passwordInput2: "",
    user: "",
  };

  

  validateInput = () => {
    const { email, passwordInput1, passwordInput2, user } = this.state;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (!email || !passwordInput1 || !passwordInput2 || !user) {
      Alert.alert(
        "Error",
        "Los campos de correo electrónico y contraseña no pueden estar vacíos."
      );
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert(
        "Error",
        "Por favor, introduce un correo electrónico válido."
      );
      return false;
    }

    if (!passwordRegex.test(passwordInput1) || !passwordRegex.test(passwordInput2)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 carácteres, mayúsculas y minúsculas y al menos 1 carácter especial."
      );
      return false;
    }

    if (passwordInput1 != passwordInput2 && passwordInput2 != passwordInput1) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (this.validateInput()) {
      Alert.alert("Éxito", "Las validaciones fueron exitosas.");
    }
  };

 


  render() {
    return (
      <View style={styles.container}>
        
        <Image
            style={styles.image}
            source={require("../assets/musica.png")}
            />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={(user) => this.setState({ user })}
          value={this.state.user}
          keyboardType="default"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          keyboardType="email-address"
        />

        <Text style={styles.label1}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(passwordInput1) => this.setState({ passwordInput1 })}
          value={this.state.passwordInput1}
          secureTextEntry

        />

        <Text style={styles.label2}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(passwordInput2) => this.setState({ passwordInput2 })}
          value={this.state.passwordInput2}
          secureTextEntry

        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

       

      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#009f49",
    marginTop: 20,
    padding: 10,
    borderRadius: 28,
    width: "30%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  label: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
    color: "#fff",
  },
  label1: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
    color: "#fff",
  },
  label2: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
    color: "#fff",
  },
  link: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
  },
});