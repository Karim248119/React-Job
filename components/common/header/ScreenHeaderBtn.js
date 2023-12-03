import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import icon from '../../../assets/icons/menu.png'
import styles from './screenheader.style'
const ScreenHeaderBtn = ( { iconUrl, dimension, handlePress } ) =>
{
  return (
    <TouchableOpacity style={ styles.btnContainer } onPress={ handlePress }>
      <Image
        source={ iconUrl }
        style={ styles.btnImg( dimension ) }
        resizeMode='cover'
      >
      </Image>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn