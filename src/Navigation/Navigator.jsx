import {
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../Global/Colors";
import {
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    MaterialIcons,

} from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import MyProfileStack from "./MyProfileStack";
import { getSession } from "../SQLite";
import InicialStack from './InicialStack'
import { setUser } from "../features/User/userSlice";
import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();

const Navigator = () => {
    let email = 'f@f.com'

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                console.log('Getting session...');
                const session = await getSession()
                console.log('Sesion: ');
                console.log(session);
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log('Error getting session');
                console.log(error.message);
            }
        })()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>


                {email !== undefined ? (
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarStyle: styles.tabBar,
                        }}
                    >


                        <Tab.Screen
                            name="Inicial"
                            component={InicialStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            <FontAwesome
                                                name="wpexplorer"
                                                size={
                                                    focused  == true ? 44 : 24
                                                }
                                                color={
                                                    focused  == true ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />


                        <Tab.Screen
                            name="Event"
                            component={MyProfileStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            <MaterialIcons
                                                name="event"
                                                size={
                                                    focused  == true ? 44 : 24
                                                }
                                                color={
                                                    focused  == true ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />

                        <Tab.Screen
                            name="Shop"
                            component={ShopStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            < FontAwesome
                                                name="shopping-basket"
                                                size={
                                                    focused  == true ? 44 : 24
                                                }
                                                color={
                                                    focused  == true ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />


                        <Tab.Screen
                            name="Cart"
                            component={CartStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            <Entypo
                                                name="shopping-cart"
                                                size={
                                                    focused  == true ? 44 : 24
                                                }
                                                color={
                                                    focused  == true ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />



                        <Tab.Screen
                            name="Order"
                            component={OrderStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>

                                            <Entypo
                                                name="list"
                                                size={
                                                    focused  == true ? 44 : 24
                                                }
                                                color={
                                                    focused  == true ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />

                        <Tab.Screen
                            name="MyProfile"
                            component={MyProfileStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            <Ionicons
                                                name="person-circle-outline"
                                                size={
                                                    focused  == true ? 54 : 34
                                                }
                                                color={
                                                    focused  == true ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />

                    </Tab.Navigator>
                ) : (
                    <AuthStack />
                )}

            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    tabBar: {
        backgroundColor: colors.colorblanco,
        shadowColor: "black",
        height: 60,
    },
});
