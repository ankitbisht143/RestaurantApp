import React,{Component} from 'react'
import {Alert} from 'react-native'
import {connect} from 'react-redux';

import Login from './login';
import * as actions from '../../actions/authActions'

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.loginAction=this.loginAction.bind(this);

    this.state={
      email:'',
      password:''
    }
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
