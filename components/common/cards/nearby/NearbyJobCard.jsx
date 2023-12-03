import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './nearbyjobcard.style'
import { checkImageURL } from "../../../../utils"

const NearbyJobCard = ( { job, handleNavigate } ) =>
{
  return (
    <TouchableOpacity style={ styles.container }
      onPress={ handleNavigate }
    >
      <TouchableOpacity style={ styles.logoContainer }>
        <Image style={ styles.logImage }
          source={ { uri: checkImageURL( job.employer_logo ) ? job.employer_logo : 'https://cdn-icons-png.flaticon.com/512/306/306424.png' } }
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={ styles.textContainer }>
        <Text style={ styles.jobName } numberOfLines={ 1 }>
          { job.job_title }
        </Text>
        <Text style={ styles.jobType }>{ job.job_employment_type }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard