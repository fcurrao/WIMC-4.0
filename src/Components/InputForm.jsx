import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/Colors';

const InputForm = ({
    label,
    onChange,
    error = "",
    isSecure = false
}) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
    return (
        <View style={styles.inputContainer}>
            <View>
                <Text style={styles.subtitle}>{label}</Text>
            </View>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
            />
            {error ?
                <View>
                    <Text style={styles.error}>
                        {error}
                    </Text>
                </View>
                :
                null
            }
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'Josefin'
    },
    error: {
        fontSize: 16,
        color: 'red',
        fontFamily: 'Josefin',
        fontStyle: 'italic',
    },
    input: {
        width: '90%',
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.peach,
        padding: 2,
        fontFamily: 'Josefin',
        fontSize: 14,
    }
})