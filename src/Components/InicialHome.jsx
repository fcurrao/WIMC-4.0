import { FlatList, StyleSheet, Text, Image, Platform, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/CategoryItem'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';
import ItemDetail from '../Screens/ItemDetail';
import Itemxd from '../Components/Itemxd'

import Home from '../Screens/Home';
import {
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    MaterialIcons,

} from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";
const InicialHome = ({
    navigation, route
}) => {



    return (<View>

        <Itemxd></Itemxd>
    </View>
    )
}




export default InicialHome

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorblanco,
        width: "100%",
        height: "100%",
        flex: 1,
    },
    boxs: {
        paddingTop: "4%",
        paddingBottom: "4%",
        paddingLeft: "9%",
        paddingRight: "9%",
        backgroundColor: colors.colorblanco,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "flex-end",
    },
    boxsCard: {
        alignItems: "center",
        margin: "4%",
    },
    flatprobando: {
        backgroundColor: "red",
        width: "50%",
    },
    flex1: { 
    },
    wrapper: {
        alignItems: "stretch",
        display: "flex",
        flexBasis: "auto",
        flexDirection: "column",
        flexShrink: 0,
        margin: 0,
        padding: 0,
        zIndex: 0,
 

    },
    container2: {
        backgroundColor: colors.colorblanco,
        alignItems: 'center',
        height: '100%',
    },
    container3: { 
        display: "flex",
        // transform: "translateZ(0px)",
        overflowY: "auto",
        flexBasis: "auto",
        flexShrink: 1,
        flexGrow: 1,
        flexDirection: "column",
        overflowX: "hidden",
    },
    flatlist: {
        width: '90%',
    },
    image: {
        height: '80px',
        width: '100%',
        marginBottom: '5%',
        minWidth: 150,
        maxWidth: 250,
        borderRadius: 8
    },
    imageBoard: {
        height: '180px',
        width: '90%',
        borderRadius: 8,
        margin: "5%",
    },
})