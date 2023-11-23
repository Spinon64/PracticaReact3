import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import ArtistList from "./ArtistList";
import { getMusicData } from "./api-client";

export default class HomeView extends Component {
  state = {
    artists: null,
  };

  componentDidMount() {
    getMusicData().then((data) => this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.goBackButton}  onPress={() => Actions.login()}>
                 <Text style={styles.goBackText}>Go Back</Text>
              </TouchableOpacity>
        {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingTop: 90,
  },
  goBackButton: {
    marginTop: 40,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 10,
  },
  goBackText: {
    fontSize: 16,
    color: 'white',
  },
});