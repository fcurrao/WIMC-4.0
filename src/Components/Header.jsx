import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/User/userSlice";
import { deleteSession } from "../SQLite";
import Search from "./Search";
import NavBarMenu from '../Components/NavBarMenu'

import { Entypo } from '@expo/vector-icons';

const Header = ({ route, navigation }) => {
    if(navigation == undefined) navigation=true ; 
    let title;
    if (route == undefined) title = "Home"; 
    else  if (route.name === "Home") title = "Bonsais Orlando";
    else if (route.name === "ItemListCategory") title = route.params.category;
    else if (route.name === "ItemDetail") title = route.params.item.title;
    else title = route.name;

    const [ismenu, SetIsmenu] = useState(false)
    const dispatch = useDispatch();
    const { email, localId } = useSelector((state) => state.userReducer.value);

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [keywordError, setKeywordError] = useState("")


    useEffect(() => {
        if (keyword) {
            setKeyword(keyword)
        }

    }, [keyword])



    const onSearch = (input) => {
        const expression = /^[a-zA-Z0-9\ ]*$/
        const evaluation = expression.test(input)

        if (evaluation) {
            setKeyword(input)
            setKeywordError("")
        } else {
            console.log("Solo letras y números");
            setKeywordError("Solo letras y números")
        }

    }



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
        <>
            <Pressable
                style={styles.pressableback}
                onPress={() => setKeyword(!keyword)}
            >
                <AntDesign name="back" size={24} color="black" />
            </Pressable>
            {keyword == false ? <View style={styles.containerHeader}>
                <Pressable
                    style={styles.pressablemenu}
                    onPress={() => SetIsmenu(!ismenu)}
                >
                    <Entypo name="menu" size={34}
                        color={colors.color5}
                    />
                </Pressable>
                <View style={styles.search} ><Search
                    onSearch={onSearch}
                    error={keywordError}
                    goBack={() => navigation.goBack()}
                />
                </View>
                {navigation.canGoBack() == true ? (
                    <Pressable
                        style={styles.pressableback}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="back" size={24} color="black" />
                    </Pressable>
                ) : null}
            
                {ismenu == true? <>
                    <NavBarMenu></NavBarMenu></> : <>
                </>}
                </View>: <></>}
        </>

    );
};

export default Header;

const styles = StyleSheet.create({
    navBarMenu: {
        // fontfamilyly: 'Josefin',
        position: "fixed",
        top: "10%",
        webkitBoxShadow: "10px 10px 5px 0px white",
        mozBoxShadow: "10px 10px 5px 0px black",
        boxShadow: "8px 8px 4px 0px #eeeaea",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "10px",
        backgroundColor: colors.colorblanco,
        height: "max-content",
        width: "70%",
        display: "flex",
        flexDirection: "column"
    },
    optionMenu: {
        // fontfamilyly: 'Josefin',
        padding: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    optionMenuHover: {
        // fontfamilyly: 'Josefin',
        transform: "scale(1.7)",
    },
    containerHeader: {
        // fontfamilyly: 'Josefin',
        display: "flex",
        backgroundColor: colors.colorblanco,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        position: "relative",
        borderBottomColor: "#b7b7b7",
        borderBottomWidth: 3,
    },
    text: {
        // fontfamilyly: 'Josefin',
        fontSize: 25,
    },
    pressablemenu: {
        // fontfamilyly: 'Josefin',
        position: "absolute",
        left: 20,
        top: "20%",
    },
    pressableback: {
        position: "absolute",
        right: 30,
        top: "50%",
    },
    signOut: {
        // fontfamilyly: 'Josefin',
        position: "absolute",
        left: 30,
        top: "50%",
    },
    search: {
        // fontfamilyly: 'Josefin',
        marginLeft: "15%",
    },
}); 