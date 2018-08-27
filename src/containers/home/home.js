import React from 'react'
import {View,Text,FlatList,Image,ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image'
import Spinner from 'react-native-loading-spinner-overlay';

import Carousel from '../../components/carousel';
import ReadMoreText from '../../components/readMore';
import OpacityButton from '../../components/button/touchableOpacity';
import {styles} from '../styles';
import * as image from '../../constants/images';
import * as color from '../../constants/colors';

import {SCREEN_HEIGHT,SCREEN_WIDTH} from '../../constants/dimensions';

const Home = props => {
  const {blackContainer,leftAlignText,lightText,absoluteContainer,boldText,locationIcon,rowContainer,rowText,boldTitle,premiumIcon,
        premiumServicesContainer,premiumServicesTitle,horzSeperator,events,scrollviewContainer,eventsText,eventsTime,btnText,
        rightAlignBtn,musicIcon,spinner}=styles;
    return(
      <View style={blackContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={scrollviewContainer}>
        <Spinner visible={props.loading} textStyle={spinner} />
          <Carousel/>
          <View style={absoluteContainer}>
            <Text style={lightText}>{props.restaurantType.toUpperCase()}</Text>
            <Text style={boldText}>{props.restaurantName}</Text>
            <View style={rowContainer}>
              <Icon name="map-marker" size={15} color="white" style={locationIcon}/>
              <Text style={rowText}>Sector 29, Gurgaon</Text>
            </View>
            <Text style={boldTitle}>WOOBLY PREMIUM PRIVILEGES</Text>
            <FlatList scrollEnabled={false} numColumns={3} data={props.premiumServices} keyExtractor={(x,i) => i} renderItem={({item}) =>
              <View style={premiumServicesContainer}>
                <FastImage style={premiumIcon} source={{uri:image.PREMIUM,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.stretch}/>
                <Text style={premiumServicesTitle}>{item.services}</Text>
              </View>
            }/>
          </View>
          <Text style={leftAlignText}>UPCOMING EVENTS</Text>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={props.events} keyExtractor={(x,i) => i} renderItem={({item,index}) =>
            <View>
              <FastImage style={[events,{marginLeft:index==0?SCREEN_HEIGHT/33.3:15}]} source={{uri:item,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.stretch}/>
              <Text style={[eventsText,{marginLeft:index==0?SCREEN_HEIGHT/33.3:15}]}>Back to school - DJ Set by Irwin</Text>
              <Text style={[eventsTime,{marginLeft:index==0?SCREEN_HEIGHT/33.3:15}]}>{`22nd June`}</Text>
              <Text style={[eventsTime,{marginLeft:index==0?SCREEN_HEIGHT/33.3:15,marginTop:1}]}>10 PM onwards</Text>
            </View>
          }/>
          <View style={horzSeperator}/>
          <Text style={leftAlignText}>ABOUT {props.restaurantName.toUpperCase()}</Text>
          <ReadMoreText numberOfLines={6} style={leftAlignText} text={props.aboutRestaurant}/>
          <View style={horzSeperator}/>
          <Text style={leftAlignText}>PHOTOS & VIDEOS</Text>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={props.events} keyExtractor={(x,i) => i} renderItem={({item,index}) =>
            <View>
              <FastImage style={[events,{marginLeft:index==0?SCREEN_HEIGHT/33.3:15}]} source={{uri:item,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.stretch}/>
            </View>
          }/>
          <View style={horzSeperator}/>
          <Text style={leftAlignText}>MUSIC</Text>
          <View style={rowContainer}>
            <FastImage style={musicIcon} source={{uri:image.PLAY,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.stretch}/>
            <View>
              <Text style={[rowText,{marginTop:30,fontSize:13,color:color.BLUE}]}>NOW PLAYING</Text>
              <Text style={[rowText,{marginTop:2,fontSize:18}]}>{`Retro 90's Hits`}</Text>
            </View>
          </View>
          <View style={rowContainer}>
            <FastImage style={musicIcon} source={{uri:image.MUSIC,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.stretch}/>
            <View>
              <Text style={[rowText,{marginTop:30,fontSize:13,color:color.GRAY}]}>ALSO PLAYED HERE</Text>
              <Text style={[rowText,{marginTop:1,fontSize:18}]}>House, Top 40, Chill House</Text>
            </View>
          </View>
          <View style={[horzSeperator,{marginTop:100,marginHorizontal:0}]}/>
          <View style={[rowContainer,{marginTop:10,height:44,justifyContent:'center'}]}>
            <Text style={[leftAlignText,{marginTop:0,alignSelf:'center'}]}>₹1800 per person</Text>
            <OpacityButton title="BOOK A TABLE" textStyle={btnText} buttonStyle={rightAlignBtn}/>
          </View>
        </ScrollView>
      </View>
    )
}

export default Home;
