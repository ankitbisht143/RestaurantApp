import React, {Component} from 'react';
import {View,Image} from 'react-native';

import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image'
import {PropTypes} from 'prop-types';

import {styles} from './styles';
import * as carouselImg from '../data/carouselImages';
import * as color from '../constants/colors';

export default class Carousel extends Component{
  constructor(props){
    super(props);
    this.state={
      imageData:[
        {"url":carouselImg.IMG1},
        {"url":carouselImg.IMG2},
        {"url":carouselImg.IMG3},
        {"url":carouselImg.IMG4},
      ]
    }
  }

  renderCarousel(image){
    return(
      <FastImage style={styles.carouselImg} source={{uri:image.url,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.cover}/>
    )
  }
  render(){
    const {carouselContainer,paginationStyle,dotStyle,activeDotStyle} = styles;
    const {imageData} = this.state;
    return(
      <View style={carouselContainer}>
      <Swiper dotStyle={dotStyle} activeDotStyle={activeDotStyle} autoplayTimeout={4} key={imageData.length} paginationStyle={paginationStyle} autoplay={true} showsButtons={false} dotColor={color.GRAY} activeDotColor="white">
        {imageData && imageData.length > 0?imageData.map(i => <View key={i.url}>{this.renderCarousel(i)}</View>) : <View/>}
      </Swiper>
      </View>
    )
  }
}
