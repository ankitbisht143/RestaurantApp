import React, {Component} from 'react';
import {TouchableOpacity,Text} from 'react-native'
import {PropTypes} from 'prop-types';

import {SCREEN_HEIGHT,SCREEN_WIDTH} from '../../constants/dimensions';
import * as color from '../../constants/colors';
import * as fontFamily from '../../constants/fontFamily';

export default class OpacityButton extends Component{
  render(){
    const {onPress,title,textStyle,buttonStyle,activeOpacity}=this.props;
    return(
      <TouchableOpacity style={buttonStyle} activeOpacity={activeOpacity} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

OpacityButton.propTypes={
  onPress:PropTypes.func,
  title:PropTypes.string.isRequired,
  textStyle:PropTypes.object.isRequired,
  activeOpacity:PropTypes.number
}

OpacityButton.defaultPropTypes={
  activeOpacity:1
}
