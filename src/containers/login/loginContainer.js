import React,{Component} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {connect} from 'react-redux';

import Login from './login';
import * as actions from '../../actions/authActions'
import {IS_LOGGED_IN} from '../../constants/asyncStorageKeys'

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.loginAction=this.loginAction.bind(this);

    this.state={
      email:'',
      password:''
    }
  }
  componentWillMount(){
    AsyncStorage.getItem(IS_LOGGED_IN).then((value) => {
      if(value){
          this.props.navigation.navigate('home')
      }
    })
  }

  onChangeText(inputName,input){
    switch(inputName){
      case 'email':
        this.setState({email:input})
        break;
      default:
      this.setState({password:input})
    }
  }

  loginAction(){
    this.loadingButton.showLoading(true);
    this.props.login(this.state.email,this.state.password).then(() => {

      if(this.props.error){

        Alert.alert(
            '',
            'Invalid credentials.',
            [{text:'OK',onPress: () =>
              this.loadingButton.showLoading(false)
            }]
          )
      }
      else{
        AsyncStorage.setItem(IS_LOGGED_IN,"1")
        this.props.navigation.navigate('home')
      }
    })
  }

  render(){
    return(
      <Login email={this.state.email} password={this.state.password} onChangeText={(inputName,input) => this.onChangeText(inputName,input)}
        loginAction={this.loginAction} onRef={ref => (this.loadingButton = ref)}/>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
  isLoading:state.auth.isLoading,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  login:(email,password) => dispatch(actions.login({email,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
