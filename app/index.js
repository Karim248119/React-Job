import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { COLORS, images, SIZES, ICONS } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import { Stack, useRouter } from 'expo-router';
import icons from '../constants/icons';


const Home = () =>
{
    const router = useRouter()
    const [ searchTerm, setSearchTerm ] = useState( '' )
    return (
        <SafeAreaView style={ { flex: 1, backgroundColor: COLORS.lightWhite } }>
            <Stack.Screen
                options={ {
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={ ICONS.menu } dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={ images.profile } dimension="100%" />
                    ),
                    headerTitle: ""
                } }
            ></Stack.Screen>
            <ScrollView
                showsVerticalScrollIndicator={ false }
            >
                <View style={ {
                    flex: 1,
                    padding: SIZES.medium
                } }>
                    <Welcome
                        searchTerm={ searchTerm }
                        setSearchTerm={ setSearchTerm }
                        handleClick={ () =>
                        {
                            if ( searchTerm )
                            {
                                router.push( `/search/${ searchTerm }` )
                            }
                        } }
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create( {} )

export default Home;
