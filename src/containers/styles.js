import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH,SCREEN_HEIGHT} from '../constants/dimensions';
import * as font from '../constants/fontFamily';

export const styles=StyleSheet.create({
  container:{
    flex:1
  },
  loginBg:{
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT,
  },
  centerAlignText:{
    alignSelf:'center',
    position:'absolute',
    top:SCREEN_HEIGHT/5,
    fontSize:22,
    fontFamily:font.ARGENTCF_REGULAR,
    color:'white'
  },
  absoluteContainer:{
    backgroundColor:'transparent',
    position:'absolute',
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT
  },
  bottomBtn:{
    position:'absolute',
    bottom:SCREEN_HEIGHT/25,
    alignSelf:'center'
  }
})
