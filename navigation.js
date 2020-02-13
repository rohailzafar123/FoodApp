import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Discirp from './discription';
import Home from './App';
import Discirption from './screen/Burgerdis';
const AppNavigator = createStackNavigator(
{
    Home,
    Discirption,
},
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
          header: null,
          headerForceInset: { top: 'never', bottom: 'never' },
        },
      },
    
    
    
    );
    
    
export default createAppContainer(AppNavigator)