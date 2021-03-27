import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from './Screens/LoginScreen'
import ChatScreen from './Screens/ChatScreen'
import SignupScreen from './Screens/SignupScreen'

const AppNavigator=createStackNavigator({
    Chat:ChatScreen,
    login:LoginScreen,
    signin:SignupScreen  
},{

  hearderMode:"none"
}
)
