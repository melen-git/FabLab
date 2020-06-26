import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image, Button } from 'react-native';

import {styleFiche} from '../styles'


export default class Fiche extends Component {

  render() {

    return (
      <TouchableOpacity style={styleFiche.main_container} >
        <Image
          style={styleFiche.image}
          source={{uri: "image"}}
        />
        <View>
          <View style={styles.header_container}>
            <Text style={styleFiche.title}>Titre du projet</Text>
            <Text style={styleFiche.adderant}>Nom de l'addérant</Text>
          </View>
          <View style={styleFiche.description_container}>
            <Text style={styleFiche.description} numberOfLines={6}>Description</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styleFiche.date_container}>
            <Text style={styleFiche.date_text}>Sorti le 00/00/0000</Text>
          </View>

        </View>

      </TouchableOpacity>
    );
  }
}
<View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Titre du film</Text>
            <Text style={styles.vote_text}>Vote</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>Description</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le 00/00/0000</Text>
          </View>
        </View>
