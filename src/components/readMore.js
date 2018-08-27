import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

import {PropTypes} from 'prop-types';
import ReadMore from 'react-native-read-more-text';

import {SCREEN_HEIGHT} from '../constants/dimensions';

export default class ReadMoreText extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {numberOfLines,style,text} = this.props;
    const {readMoreContainer} = styles;
    return (
        <View style={readMoreContainer}>
          <ReadMore numberOfLines={numberOfLines}>
            <Text style={style}>{text}</Text>
          </ReadMore>
        </View>
    );
  }

}

ReadMoreText.propTypes={
  numberOfLines:PropTypes.number.isRequired,
  style:PropTypes.object.isRequired,
  text:PropTypes.string.isRequired
}

const styles=StyleSheet.create({
  readMoreContainer:{
    marginHorizontal:SCREEN_HEIGHT/33.3,
    marginTop:30
  }
})
