import React from 'react';
import {View,Text,Image} from 'react-native';

import TextInput from '../../components/textInput';
import Button from '../../components/button/button';
import {SCREEN_HEIGHT} from '../../constants/dimensions';
import Spinner from 'react-native-loading-spinner-overlay';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {styles} from '../styles';

const Login = props => {
    const {container,loginBg,centerAlignText,absoluteContainer,bottomBtn,spinner}=styles;
    return(
      <View style={container}>
        <Spinner visible={props.loading} textStyle={spinner} />
          <KeyboardAwareScrollView>
            <Text style={centerAlignText}>Sign in to get started</Text>
            <TextInput keyboardType="email-address" placeholder="Email Address" value={props.email} marginTop={SCREEN_HEIGHT/16.6} onChangeText={(email) => props.onChangeText('email',email)}/>
            <TextInput secureTextEntry={true} placeholder="Password" value={props.password} onChangeText={(password) => props.onChangeText('password',password)}/>
          </KeyboardAwareScrollView>
          <View style={bottomBtn}>
            <Button title="LOGIN" onPress={props.loginAction} onRef={props.onRef}/>
          </View>
      </View>
    )
}

export default Login;
