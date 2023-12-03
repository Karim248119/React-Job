import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { router, useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { FlatList } from 'react-native-gesture-handler'
import useFetch from '../../../hook/useFetch'


const NearbyJobs = () =>
{
  const router = useRouter()
  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: 'React developer',
      num_pages: 1
    }

  )
  const [ selectedJob, setSelectedJob ] = useState()
  return (

    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.headerTitle }>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={ styles.headerBtn }>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.cardsContainer }>
        { isLoading ? (
          <ActivityIndicator size={ 'large' } color={ COLORS.primary } />
        ) : error ? (
          <Text>Somthing Went Wrong</Text>
        ) : (
          data?.map( ( job, index ) => (
            <NearbyJobCard
              job={ job }
              key={ index }
              handleNavigate={ () => router.push( `/job-details/${ job.job_id }` ) }
            />
          ) )
        )
        }
      </View>
    </View>
  )
}

export default NearbyJobs