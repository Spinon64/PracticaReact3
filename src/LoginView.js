import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {Alert,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";

export default class LoginView extends Component {
  state = {
    email: "",
    password: "",
    showPassword: false,
  };

  

  validateInput = () => {
    const { email, password } = this.state;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (!email || !password) {
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

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 carácteres, mayúsculas y minúsculas y al menos 1 carácter especial."
      );
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (this.validateInput()) {
      Alert.alert("Éxito", "Las validaciones fueron exitosas.");
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };


  render() {
    return (
      <View style={styles.container}>
        
        <Image
            style={styles.image}
            source={require("../assets/spotify.png")}
            />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          
          value={this.state.email}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.showPassword ? this.state.password : "********"}
          secureTextEntry={!this.state.showPassword}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.togglePasswordVisibility}
        >
          <Text style={styles.buttonText}>
            {this.state.showPassword ? "Hide Password" : "Show Password"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.link} onPress={() => Actions.register()}>
          Register
        </Text>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
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
  link: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
  },
});