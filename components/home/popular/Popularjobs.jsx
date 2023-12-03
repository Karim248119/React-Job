import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { router, useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { FlatList } from 'react-native-gesture-handler'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () =>
{
  const router = useRouter()
  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: 'React developer',
      num_pages: 1
    }

  )

  return (

    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.headerTitle }>Popularjobs</Text>
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
          <FlatList
            data={ data }
            showsHorizontalScrollIndicator={ false }
            renderItem={ ( { item } ) =>
            (
              <PopularJobCard item={ item } />
            ) }

            keyExtractor={ item => item?.job_id }
            contentContainerStyle={ { columnGap: SIZES.medium } }
            horizontal
          />
        )
        }
      </View>
    </View>
  )
}

export default Popularjobs