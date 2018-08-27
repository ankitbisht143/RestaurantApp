import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

import { TextField } from 'react-native-material-textfield';
import {PropTypes} from 'prop-types';
import {SCREEN_HEIGHT} from '../constants/dimensions';
import * as fontFamily from '../constants/fontFamily';

export default class TextInput extends Component{
  render(){
    const {placeholder,value,onChangeText,marginTop,secureTextEntry,keyboardType} = this.props;
    const {containerStyle,labelTextStyle} = styles
    return(
      <TextField containerStyle={[containerStyle,{marginTop:marginTop}]} label={placeholder}
        value={value} onChangeText={onChangeText} tintColor='black' textColor='black' baseColor='gray' labelTextStyle={labelTextStyle}
        titleTextStyle={labelTextStyle} secureTextEntry={secureTextEntry} autoCapitalize={'none'} keyboardType={keyboardType}/>
    )
  }
}

TextInput.propTypes={
  placeholder:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChangeText:PropTypes.func,
  marginTop:PropTypes.number,
  secureTextEntry:PropTypes.bool
}

TextInput.defaultPropTypes={
  keyboardType:'defsault',
  marginTop:SCREEN_HEIGHT/50,
  secureTextEntry:false
}

const styles=StyleSheet.create({
  containerStyle:{
    marginHorizontal:SCREEN_HEIGHT/33.3,
  },
  labelTextStyle:{
    fontFamily:fontFamily.ARGENTCF_REGULAR
  }
})
