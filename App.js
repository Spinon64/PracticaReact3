import React from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginView from "./src/LoginView";
import RegisterView from "./src/RegisterView";


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginView}
          title="Login"
          initial={true}
          hideNavBar
        />
        <Scene key="register" component={RegisterView} title="Register" />
      </Scene>
    </Router>
  );
};

export default App;