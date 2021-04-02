import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from './../Screens/LoginScreen'
import ChatScreen from './../Screens/ChatScreen'
import SignupScreen from './../Screens/SignupScreen'
import HomeScreen from './../Screens/Home'
import SubjectScreen from './../Screens/Subject'
const AppNavigator=createStackNavigator({
    Home:HomeScreen,
    subject:SubjectScreen, 
    Chat:ChatScreen,
    login:LoginScreen,
    signin:SignupScreen,
      
},{
  hearderMode:"none"
}
)

export default createAppContainer(AppNavigator)