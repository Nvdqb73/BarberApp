import { useState } from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

function Login({ navigation }) {
    const widthWindow = Dimensions.get('window').width;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eyeHidden, setEyeHidden] = useState(true);

    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', marginTop: 14 }}>
            {/* Heading */}
            <Text style={{ marginLeft: 30, fontSize: 32, color: '#333', fontWeight: 500 }}>Login in your account.</Text>
            {/* Email */}
            <View
                style={{
                    width: widthWindow - 60,
                    marginLeft: 30,
                    marginTop: 20,
                    height: 50,
                    backgroundColor: '#fff',
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* <Image
                    source={require('../../images/mail.png')}
                    resizeMode="stretch"
                    style={{ marginLeft: 12, width: 30, height: 30 }}
                /> */}
                <AntDesign name="mail" style={{ marginLeft: 12, width: 30, height: 30 }} />
                <TextInput
                    value={email}
                    placeholder="Email"
                    style={{ marginLeft: 12, fontSize: 22, flex: 1 }}
                    onChangeText={setEmail}
                />
            </View>
            {/* Password */}
            <View
                style={{
                    width: widthWindow - 60,
                    marginLeft: 30,
                    marginTop: 20,
                    height: 50,
                    backgroundColor: '#fff',
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* <Image
                    source={require('../../images/brand-samsungpass.png')}
                    resizeMode="stretch"
                    style={{ marginLeft: 12, width: 30, height: 30 }}
                /> */}
                <AntDesign name="book" style={{ marginLeft: 12, width: 30, height: 30 }} />
                <TextInput
                    value={password}
                    placeholder="Password"
                    secureTextEntry={eyeHidden ? false : true}
                    style={{ marginLeft: 12, fontSize: 22, flex: 1 }}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setEyeHidden(!eyeHidden)}>
                    {eyeHidden ? (
                        // <Image
                        //     source={require('../../images/eye.png')}
                        //     resizeMode="stretch"
                        //     style={{ width: 35, height: 35, marginLeft: 10, marginRight: 10 }}
                        // />
                        <Entypo name="eye" style={{ width: 35, height: 35, marginLeft: 10, marginRight: 10 }} />
                    ) : (
                        // <Image
                        //     source={require('../../images/eye-closed.png')}
                        //     resizeMode="stretch"
                        //     style={{ width: 35, height: 35, marginLeft: 10, marginRight: 10 }}
                        // />
                        <Entypo
                            name="eye-with-line"
                            style={{ width: 35, height: 35, marginLeft: 10, marginRight: 10 }}
                        />
                    )}
                </TouchableOpacity>
            </View>
            {/* forget password */}
            <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 12 }}>
                <Text style={{ padding: 20, fontSize: 16, color: '#333' }}>Forget password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: widthWindow - 60,
                    marginLeft: 30,
                    marginTop: 20,
                    height: 60,
                    borderRadius: 28,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#4D8D6E',
                }}
            >
                <Text style={{ fontSize: 22, color: '#fff' }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Login;
