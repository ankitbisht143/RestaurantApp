import {StackNavigator} from 'react-navigation';

import Login from '../scenes/login';

const MainNavigator = StackNavigator({
  login:{screen:Login,navigationOptions:{header:null}}
})

export default MainNavigator
