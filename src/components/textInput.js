import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

import { TextField } from 'react-native-material-textfield';
import {PropTypes} from 'prop-types';
import {SCREEN_HEIGHT} from '../constants/dimensions';
import * as fontFamily from '../constants/fontFamily';

export default class TextInput extends Component{
  render(){
    const {placeholder,value,onChangeText,marginTop,secureTextEntry,autoCapitalize} = this.props;
    const {containerStyle,labelTextStyle} = styles
    return(
      <TextField containerStyle={[containerStyle,{marginTop:marginTop?marginTop:SCREEN_HEIGHT/50}]} label={placeholder}
        value={value} onChangeText={onChangeText} tintColor='white' textColor='white' baseColor='white' labelTextStyle={labelTextStyle}
        titleTextStyle={labelTextStyle} secureTextEntry={secureTextEntry?secureTextEntry:false} autoCapitalize={'none'}/>
    )
  }
}

TextInput.propTypes={
  placeholder:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChangeText:PropTypes.func
}

const styles=StyleSheet.create({
  containerStyle:{
    marginHorizontal:SCREEN_HEIGHT/33.3,
  },
  labelTextStyle:{
    fontFamily:fontFamily.ARGENTCF_REGULAR
  }
})
