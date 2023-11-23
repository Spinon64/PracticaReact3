import React, {Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ArtistBox extends Component {

    render() {
        const {image, name} = this.props.artist
        return (
           <View style={styles.container}>
              
                <View style={styles.artistBox}>
                    <Image style={styles.image} source={{uri: image}} />
                        <View style={styles.info}>
                        <Text style={styles.name}>{name}</Text>
                        </View>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backgroundColor: 'gray',
        flexDirection: 'row',
        elevation: 2,
        borderRadius: 20,
    },
    goBackButton: {
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
    container: {
        backgroundColor: '#1F1F1F',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius:20,

    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        color: '#333',
      
    },
});