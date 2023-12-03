import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { ICONS, SIZES } from '../../../constants'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const jobTypes = [ 'Full-time', 'Part-time', 'Contract', 'Free-Lance', 'Temborary' ]

const Welcome = ( { searchTerm, setSearchTerm, handleClick } ) =>
{
  const router = useRouter()
  const [ activeJobTybe, setactiveJobTybe ] = useState( 'Full-time' )
  return (
    <View>
      <View style={ styles.container }>
        <Text style={ styles.userName }>hollo eddy</Text>
        <Text style={ styles.welcomeMessage }>find your perfect jop</Text>
      </View>
      <View style={ styles.searchContainer }>
        <View style={ styles.searchWrapper }>
          <TextInput
            style={ styles.searchInput }
            value={ searchTerm }
            onChangeText={ ( text ) => { setSearchTerm( text ) } }
            placeholder='Looking for Something?'
          />
        </View>
        <TouchableOpacity style={ styles.searchBtn } onPress={ handleClick }>
          <Image source={ ICONS.search }
            resizeMode='contain'
            style={ styles.searchBtnImage }
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={ styles.tabsContainer }>
        <FlatList data={ jobTypes }
          showsHorizontalScrollIndicator={ false }
          renderItem={ ( { item } ) =>
          (
            <TouchableOpacity style={ styles.tab( activeJobTybe, item ) }
              onPress={ () =>
              {
                setactiveJobTybe( item );
                router.push( `/search/${ item }` )
              } }
            >
              <Text>{ item }</Text>
            </TouchableOpacity> )
          }
          keyExtractor={ item => item }
          contentContainerStyle={ { columnGap: SIZES.small } }
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome