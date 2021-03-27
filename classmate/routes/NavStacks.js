import {createStackNavigation} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../Screens/Home';
import Subjects from '../Screens/Subject';
const Screens ={
  LandingScreen:{
    screen:Home  
  },
  SubjectScreen:{
      screen:Subject
  }
}
const NavStacks=createStackNavigation(Screens)
export default createAppContainer(NavStacks)