import {StyleSheet} from 'react-native';

import {SCREEN_HEIGHT,SCREEN_WIDTH} from '../constants/dimensions'

export const styles=StyleSheet.create({
  carouselContainer:{
    height:SCREEN_HEIGHT
  },
  carouselImg:{
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT
  },
  activeDotStyle:{
    width:SCREEN_WIDTH/4,
    height:1,
  },
  dotStyle:{
    width:SCREEN_WIDTH/4-SCREEN_HEIGHT/33.3,
    height:1
  },
  paginationStyle:{
    top:100,
  }
})
