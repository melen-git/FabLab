import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'

const Box = {
  backgroundColor: '#DDDDDD',//'#808097'
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginVertical: 5,
  marginHorizontal: 10,
}

const Input = {
  backgroundColor: '#D0D0D0',//'#808097'
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginVertical: 5,
  marginHorizontal: 5,
  width: 57,
  height: 35,
}

export const styleFiche = StyleSheet.create({
  main_container:{
    flex: 1,
    flexDirection: 'row',
    ...Box,


  },
  image:{
    flex:1,
    width: 120,
    height: 180,

  },
  right_container:{
    flex:2,
    marginHorizontal:10,
  },
  title:{
    fontSize:17,
    fontWeight:'bold',

  },
  adderant:{

  },
  description:{

  },
});
