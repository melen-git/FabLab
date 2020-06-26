
import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, View, Text,TextInput, Button, TouchableOpacity, Image} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


//import *fonction* from '../Fonctions/CalcHeures'
import Fiche from '../Components/fichier'


//import { *stylePage* } from '../Styles'
//import { styleBase } from '../Styles'

export default class Accueil extends React.Component {

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: 'white' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styleBase.ensemble}
        scrollEnabled={true}
      >
        <Fiche/>
        <Fiche/>



      </KeyboardAwareScrollView>
    )
  }
}
/*onSubmitEditing={(event) => {this._geocodeAddress(event.nativeEvent.text)}}*/
