import React from 'react'
import { View, Text, Image } from 'react-native'
import { ICONS } from '../../../constants'
import { checkImageURL } from '../../../utils'
import styles from './company.style'

const Company = ( { companyLogo, jobTitle, companyName, location } ) =>
{
  return (
    <View style={ styles.container }>
      <View style={ styles.logoBox }>
        <Image
          source={ { uri: checkImageURL( companyLogo ) ? companyLogo : 'https://cdn-icons-png.flaticon.com/512/306/306424.png' } }
          style={ styles.logoImage }
          resizeMode="contain"
        ></Image>
      </View>
      <View style={ styles.jobTitleBox }>
        <Text style={ styles.jobTitle }>{ jobTitle }</Text>
      </View>
      <View style={ styles.companyInfoBox }>
        <Text style={ styles.companyName }>{ companyName }/</Text>
        <View style={ styles.locationBox }>
          <Image
            source={ ICONS.location }
            style={ styles.locationImage }
            resizeMode="contain"
          ></Image>
          <Text style={ styles.locationName }>{ location }</Text>
        </View>
      </View>
    </View>
  )
}

export default Company