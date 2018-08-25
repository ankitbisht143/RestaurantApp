import React from 'react';
import {View,Text,Image} from 'react-native';

import TextInput from '../../components/textInput';
import Button from '../../components/button';
import {SCREEN_HEIGHT} from '../../constants/dimensions';

import {styles} from '../styles';
import * as image from '../../constants/images';

const Login = props => {
    const {container,loginBg,centerAlignText,absoluteContainer,bottomBtn}=styles;
    return(
      <View style={container}>
        <Image resizeMode="stretch" source={image.LOGIN_BG} style={loginBg}/>
        <View style={absoluteContainer}>
          <Text style={centerAlignText}>Sign in to get started</Text>
          <TextInput placeholder="Email Address" value={props.email} marginTop={SCREEN_HEIGHT/3} onChangeText={(email) => props.onChangeText('email',email)}/>
          <TextInput secureTextEntry={true} placeholder="Password" value={props.password} onChangeText={(email) => props.onChangeText('password',email)}/>
          <View style={bottomBtn}>
            <Button title="LOGIN" onPress={props.loginAction} onRef={props.onRef}/>
          </View>
        </View>
      </View>
    )
}

export default Login;
