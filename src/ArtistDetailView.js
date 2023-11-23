import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { Actions } from "react-native-router-flux";

export default class ArtistDetailView extends Component {
  render() {
    const { artist } = this.props;
    return (
      <View style={styles.container}>
        {/* Usamos ImageBackground para permitir hijos dentro de la imagen */}
        <ImageBackground style={styles.image} source={{ uri: artist.image }}>
          {/* Vista de superposición para texto y botón */}
          <View style={styles.overlay}>
            <TouchableOpacity onPress={() => Actions.pop()} style={styles.goBackButton}>
              <Text style={{ color: 'white', marginTop: 0, padding:4, fontSize: 20, fontWeight: 'bold'  }}> Volver </Text>
            </TouchableOpacity>
          
          </View>
        </ImageBackground>

        {/* Resto del contenido debajo de la imagen */}
        <View style={styles.contentContainer}>
        <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.artistId}>{artist.id}</Text>
          <View style={styles.boxOtherInfo}>
            <Text style={styles.otherInfoText}>Listener:</Text>
            <Text style={styles.otherInfoText}>Streamable:</Text>
          </View>
          <View style={styles.boxOtherInfo}>
            <Text style={styles.otherInfoTextBold}>{artist.listener}</Text>
            <Text style={styles.otherInfoTextBold}>{artist.streamable}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 360,
    resizeMode: 'cover',
    position: 'relative',
   
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: '#1db954',
    marginTop: 40,
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistName: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 40,
    color: 'white',
    letterSpacing: 2,
    marginTop: -300,
    paddingBottom: 10,
  },
  artistId: {
    fontSize: 15,
    marginBottom: 10,
    color: 'white',
  },
  boxOtherInfo: {
    justifyContent: 'space-between',
    width: 300,
    
  },
  otherInfoText: {
    fontSize: 20,
    color: 'white',
    paddingTop: 20,
  },
  otherInfoTextBold: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
