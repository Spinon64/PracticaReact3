import React from "react";
import { Router, Scene} from "react-native-router-flux";
import LoginView from "./src/LoginView";
import HomeView from "./src/HomeView";
import RegisterView from "./src/RegisterView";
import ArtistDetailView from "./src/ArtistDetailView";


const App = () => {
  return (
    <Router>
      <Scene key="root">
      <Scene key="home" component={HomeView}  hideNavBar/>
        <Scene key="login" component={LoginView} title="Login" hideNavBar/>
        <Scene key="register" component={RegisterView} title="Register" hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar/>
      </Scene>
    </Router>
  );
};

export default App;