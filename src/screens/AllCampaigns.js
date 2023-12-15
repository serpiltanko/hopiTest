import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AllCampaignsHeader from '../components/AllCampaignsHeader'
import Filter from '../components/Filter'
import ShoppingCards from '../components/ShoppingCards'


const AllCampaigns = () => {
    return (
        <SafeAreaView>
            <AllCampaignsHeader />
            <Filter />
            <ScrollView>
                <ShoppingCards />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AllCampaigns

const styles = StyleSheet.create({})