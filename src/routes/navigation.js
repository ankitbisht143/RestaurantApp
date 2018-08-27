import {StackNavigator} from 'react-navigation';

import Login from '../scenes/login';
import Home from '../scenes/home';

const MainNavigator = StackNavigator({
  login:{screen:Login,navigationOptions:{header:null,gesturesEnabled: false}},
  home:{screen:Home,navigationOptions:{header:null,gesturesEnabled: false}}
}, {mode: 'modal'})

export default MainNavigator
