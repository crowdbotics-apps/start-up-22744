import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial175470Navigator from '../features/Tutorial175470/navigator';
import NotificationList175442Navigator from '../features/NotificationList175442/navigator';
import Settings175441Navigator from '../features/Settings175441/navigator';
import Settings175433Navigator from '../features/Settings175433/navigator';
import UserProfile175431Navigator from '../features/UserProfile175431/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial175470: { screen: Tutorial175470Navigator },
NotificationList175442: { screen: NotificationList175442Navigator },
Settings175441: { screen: Settings175441Navigator },
Settings175433: { screen: Settings175433Navigator },
UserProfile175431: { screen: UserProfile175431Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
