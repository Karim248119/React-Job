import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from "../../../../utils"

const PopularJobCard = ( { item, selectedJob, handleCardPress } ) =>
{
  return (
    <TouchableOpacity style={ styles.container( selectedJob, item ) }
    >
      <TouchableOpacity style={ styles.logoContainer( selectedJob, item ) }>
        <Image style={ styles.logoImage }
          source={ { uri: checkImageURL( item.employer_logo ) ? item.employer_logo : 'https://cdn-icons-png.flaticon.com/512/306/306424.png' } }
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={ styles.companyName } numberOfLines={ 1 }>{ item.employer_name }</Text>
      <View style={ styles.infoContainer }>
        <Text style={ styles.jobName( selectedJob, item ) } numberOfLines={ 1 }>
          { item.job_title }
        </Text>
        <Text style={ styles.location }>{ item.job_country }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard