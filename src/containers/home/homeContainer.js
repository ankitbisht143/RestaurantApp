import React,{Component} from 'react'
import {Alert} from 'react-native'
import {connect} from 'react-redux';

import Home from './home';
import * as actions from '../../actions/eventActions'

class HomeContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      premiumServices:[
        {"services":"FREE VALET PARKING"},
        {"services":"ASSURED PREMIUM TABLES"},
        {"services":"WOOBLY HANGOUT KIT"},
        {"services":"FREE WELCOME DRINKS"},
        {"services":"EXTENDED HAPPY HOURS"}
      ],
      events:[],
      restaurantType:'',
      restaurantName:'',
      aboutRestaurant:''
    }
  }

  componentDidMount(){
      this.props.getEvents()
  }

  componentWillReceiveProps(nextProps){

    if(nextProps.events.data){
      console.warn(nextProps.isLoading);

      this.setState({
        events:nextProps.events.data.story,
        restaurantType:nextProps.events.data.type,
        restaurantName:nextProps.events.data.name,
        aboutRestaurant:nextProps.events.data.description
      })
    }

  }
  render(){
    return(
      <Home events={this.state.events} restaurantType={this.state.restaurantType} restaurantName={this.state.restaurantName} premiumServices={this.state.premiumServices}
        aboutRestaurant={this.state.aboutRestaurant} loading={this.props.isLoading}/>
    )
  }
}


const mapStateToProps = state => ({
  isLoading:state.event.isLoading,
  events:state.event.events
})

const mapDispatchToProps = dispatch => ({
  getEvents:() => dispatch(actions.getEvents())
})


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
