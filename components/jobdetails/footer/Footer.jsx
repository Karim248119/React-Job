import React from 'react'
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'
import { ICONS } from '../../../constants'

import styles from './footer.style'

const Footer = ( { url } ) =>
{
  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ styles.likeBtn }>
        <Image
          source={ ICONS.heartOutline }
          style={ styles.likeBtnImage }
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.applyBtn }
        onPress={ () => Linking.openURL( url ) }
      >
        <Text style={ styles.applyBtnText }>Apply for this job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer