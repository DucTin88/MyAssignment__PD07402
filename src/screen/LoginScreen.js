import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({navigation}) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const val = useContext(AuthContext)
    return (
        <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text>{val}</Text>
        </View>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Entet email"
                    onChangeText={( text=> setEmail(text))}
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Entet Password"
                    secureTextEntry
                    onChangeText={( text=> setPassword(text))}

                />

                <Button title="Login" />
                <View style={styles.register}>
                    <Text>Don't have an account ?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                        <Text style={styles.link}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: '80%',

    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        paddingHorizontal: 14
    },
    link: {
        color: 'blue',
        fontWeight: "700"
    },
    register: {
        flexDirection: 'row', marginTop: 20
    }
})