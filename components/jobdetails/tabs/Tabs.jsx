import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'



const Tabbtn = ( { name, activeTab, onHandleSearchType } ) =>
{
  return (
    <TouchableOpacity style={ styles.btn( name, activeTab ) }
      onPress={ onHandleSearchType }
    >
      <Text style={ styles.btnText( name, activeTab ) }>{ name }</Text>
    </TouchableOpacity>
  )
}


const Tabs = ( { tabs, activeTab, setActiveTab } ) =>
{
  return (
    <View style={ { alignItems: 'center' } }>
      <FlatList

        data={ tabs }
        renderItem={ ( { item } ) => (
          <Tabbtn
            name={ item }
            activeTab={ activeTab }
            onHandleSearchType={ () => setActiveTab( item ) }
          />
        ) }
        horizontal
        showsHorizontalScrollIndicator={ false }
        keyExtractor={ item => ( item ) }
        contentContainerStyle={ { columnGap: SIZES.small / 2 } }
      />
    </View>
  )
}

export default Tabs