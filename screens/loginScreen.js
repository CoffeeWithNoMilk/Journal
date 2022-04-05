import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/logo'
import Button from '../components/button'
import { auth } from '../core/config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoadingIndicator } from '../components/activityIndicator'


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)
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
        flex: 0.3,
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
        flex: 0.7,

    }

    const TC = {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
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

    const handleLogin = () => {
    //    setLoading(true)
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then(userCredentails => {
                const user = userCredentails.user
             //   setLoading(false)
                alert('Registered with' + user.email)
            })
             // Handle Errors here.
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode ==='auth/wrong-password') {
                    alert('Wrong password');
                } 
                if (errorCode ==='auth/invalid-email') {
                    alert('Email you entered is invaliid');
                } 
                if (errorCode ==='auth/user-not-found') {
                    alert('The Email you provided does not have an account with us');
                } else {
                    alert(errorMessage);
                }
           //     setLoading(false)
            })
    }


    return (
        <View style ={{flex: 1}}>
            {loading === true ? <LoadingIndicator /> : 
                <KeyboardAvoidingView style={container} behavior="padding" enabled={true} >

            
                <View style={logoContainer}>
                    <Logo />
    
                    <View style={{ width: '100%', }}>
                        <Text style={{ color: 'white', fontSize: 38, fontWeight: '200' }}>Welcome back,</Text>
                        <Text style={{ color: 'grey', fontSize: 16, marginTop: 10 }}>sign in to continue</Text>
                    </View>
                </View>
    
                <View style={inputContainer}>
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
    
                    <View style={{ marginTop: 20 }} />
                    <Button title={'Login'} size={'large'} taskIsComplete={true} onPress={handleLogin} />
                    <View style={forgotPassword}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResetPasswordScreen')}
                        >
                            <Text style={forgot}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
    
                    <View style={{ width: '100%', alignItems: 'center', flex: 1, }}>
                        <Text style={newUser}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                            style={{
                                width: '100%',
                                alignItems: 'center', padding: 25,
                                borderRadius: 19, borderColor: '#6CBE49',
                                borderWidth: 0.8
                            }
                            }>
                            <Text style={{
                                color: '#6CBE49',
                                fontWeight: '300',
                                fontSize: 16
                            }}>Create account</Text>
                        </TouchableOpacity>
    
                    </View>
                </View>
    
                <View style={TC}>
                <TouchableOpacity>
                        <Text style={{ color: 'grey' }}>Terms and conditions</Text>
                    </TouchableOpacity>
    
                </View>
    
    
    
            </KeyboardAvoidingView>}
        </View>
        
    )
}

export default LoginScreen;



