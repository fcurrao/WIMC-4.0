import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/User/userSlice";
import { deleteSession } from "../SQLite";
import Search from "./Search";

import { Entypo } from '@expo/vector-icons';



const NavBarMenu = () => {


    const onSignout = async () => {
        try {

            console.log("deleting session...")
            const response = await deleteSession(localId)
            dispatch(signOut())
            console.log("session deleted:")
            console.log(response)
        }
        catch (error) {
            console.log("Error mientras sign out")
            console.log(error.message)
        }
    }



    return (
        <View style={styles.navBarMenu}>

            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout}>
                    <SimpleLineIcons name="home" size={24} color="black" />
                </Pressable>
                <Text> &nbsp; &nbsp; Inicio</Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout}>
                    <SimpleLineIcons name="bell" size={24} color="black" />
                </Pressable>
                <Text> &nbsp; &nbsp; Notificaciones</Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout}>
                    <SimpleLineIcons name="calendar" size={24} color="black" />
                </Pressable>
                <Text>
                    &nbsp; &nbsp; FullYear 2024
                </Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout} >
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </Pressable>
                <Text>
                    &nbsp; &nbsp; Promociones
                </Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout} >
                    <SimpleLineIcons name="question" size={24} color="black" />
                </Pressable>
                <Text>
                    &nbsp; &nbsp; Contactanos - Ayuda
                </Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout} >
                    <Entypo name="leaf" size={24} color="black" />
                </Pressable>
                <Text>
                    &nbsp; &nbsp; About us
                </Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout} >
                    <SimpleLineIcons name="star" size={24} color="black" />
                </Pressable>
                <Text>
                    &nbsp; &nbsp; Descubri
                </Text>
            </View>
            <View style={styles.optionMenu}>
                <Pressable onPress={onSignout} >
                    <SimpleLineIcons name="logout" size={24} color="black" />
                </Pressable>
                <Text>
                    &nbsp; &nbsp;  Cerrar sesion
                </Text>
            </View>
        </View>
    )
}




export default NavBarMenu;

const styles = StyleSheet.create({
    navBarMenu: { 
        height: 1000,
        backgroundColor: "#EFFFEE",
        position: "absolute",
        top: "550%", 
        left: "1%",
        paddingHorizontal: "10%", 
        paddingVertical: "0%", 
        width: "85%",
        display: "flex",
        flexDirection: "column"
    },
    optionMenu: { 
        padding: "8%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});