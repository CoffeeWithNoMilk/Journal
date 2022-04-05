import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/logo'
import Button from '../components/button'
import { auth } from '../core/config'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [fName, setfName] = useState({ value: '', error: '' })
    const [lName, setlName] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    //styles

    const container = {
        flex: 1,
        alignItems: 'center',
        width: '100%', backgroundColor: '#1A1A1A',

    }

    const forgotPassword = {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    }

    const row = {
        flexDirection: 'row',
        marginTop: 4,
    }

    const forgot = {
        fontSize: 13,
        color: 'grey',
        marginTop: 10
    }

    const newUser = {
        fontSize: 13,
        color: 'grey',
        marginVertical: 20
    }

    const link = {
        fontWeight: 'bold',
        color: 'blue',
    }

    const logoContainer = {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 0.15,
        padding: 30,
    }

    const input = {
        borderColor: 'rgba(250,250,250,.2)',
        backgroundColor: 'rgba(0,0,0,.5)',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 19,
        marginVertical: 10,
        width: '100%',
        color: 'white'

    }

    const inputContainer = {
        width: '100%',
        padding: 30,
        alignItems: 'center',
        flex: 0.75,

    }

    const TC = {
        width: '100%',
       // backgroundColor:'red',
        paddingVertical:30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'
    }

    //functions
    const onLoginPressed = async () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        setLoading(true)
        const response = await loginUser({
            email: email.value,
            password: password.value,
        })
        if (response.error) {
            setError(response.error)
        }
        setLoading(false)
    }

    const handleSignUp = () => {


        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(userCredentails => {
                const user = userCredentails.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView style={container} behavior="padding" enabled={true} >
            <View style={logoContainer}>

                <View style={{ width: '100%', }}>
                    <Text style={{ color: 'white', fontSize: 38, fontWeight: '200' }}>Create Account</Text>
                    <Text style={{ color: 'grey', fontSize: 16, marginTop: 10 }}>Fill in your information to get started</Text>
                </View>
            </View>

            <View style={inputContainer}>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <TextInput placeholder='First Name'
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => setfName({ value: text, error: '' })}
                        error={!!fName.error}
                        errorText={fName.error}
                        style={[input, { width: '45%' }]} />

                    <TextInput placeholder='Last Name'
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => setlName({ value: text, error: '' })}
                        error={!!lName.error}
                        errorText={lName.error}
                        style={[input, { width: '45%' }]} />
                </View>
                <TextInput
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder='Email'
                    placeholderTextColor={'gray'}
                    style={input}
                />
                <TextInput
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    placeholder='Password'
                    style={input}
                    placeholderTextColor={'gray'}
                />

                <TextInput
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    placeholder='Confirm Password'
                    style={input}
                    placeholderTextColor={'gray'}
                />

                <View style={{ marginTop: 20 }} />
                <Button title={'Sign Up'} size={'large'} taskIsComplete={true} onPress={handleSignUp} />
                <View style={forgotPassword}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResetPasswordScreen')}
                    >
                        <Text style={forgot}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={TC}>
                <Text style={{ color: 'grey' }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#6CBE49', fontWeight: '600' }}>Sign Up </Text>
                </TouchableOpacity>

            </View>
            </View>

           



        </KeyboardAvoidingView>
    )
}

export default SignUpScreen;



