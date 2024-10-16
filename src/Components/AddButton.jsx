import { Pressable, StyleSheet, Text , View} from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const AddButton = ({
    title = "",
    onPress = () => { },
    color = colors.pink,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: colors.pink,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontSize: 18,
        color: colors.lightPink,
    },
});
