import React, {Component} from 'react';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import {PropTypes} from 'prop-types';

import {SCREEN_HEIGHT,SCREEN_WIDTH} from '../constants/dimensions';
import * as color from '../constants/colors';
import * as fontFamily from '../constants/fontFamily';

export default class Button extends Component{
  render(){
    const {onPress,title,onRef}=this.props;
    return(
      <AnimateLoadingButton ref={onRef} width={SCREEN_WIDTH-SCREEN_HEIGHT/16.6} height={44} title={title}
          titleColor="white" titleFontSize={16} titleFontFamily={fontFamily.ARGENTCF_BOLD} backgroundColor={color.BUTTON_BG} borderRadius={4} onPress={onPress}/>
    )
  }
}

Button.propTypes={
  onPress:PropTypes.func,
  title:PropTypes.string.isRequired
}
