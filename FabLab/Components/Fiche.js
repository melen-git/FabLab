import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableOpacity,View, Image, Button } from 'react-native';

import {styleFiche} from '../Styles'


export default class FicheProjet extends Component {

  render() {

    return (
      <TouchableOpacity style={styleFiche.main_container} >
        <Image
          style={styleFiche.image}
          source={require('../Images/LogoFabLab.png')}
        />
        <View style={styleFiche.right_container}>
          <View style={styleFiche.header_container}>
            <Text style={styleFiche.title}>Titre du projet</Text>
            <Text style={styleFiche.adderant}>Réalisé par : 'Nom de l'addérant'</Text>
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
