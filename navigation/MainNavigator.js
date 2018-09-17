import {createBottomTabNavigator} from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import AuthScreen from "../screens/AuthScreen";
import MainFlowNavigator from  "./MainFlowNavigator";

const RouteConfigs = {
    welcome:  { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: { screen: MainFlowNavigator }
};

//const BottomTabNavigatorConfig = {};
const MainNavigator = createBottomTabNavigator(RouteConfigs);

export default MainNavigator;
