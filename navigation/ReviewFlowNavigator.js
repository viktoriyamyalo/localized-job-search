import { createStackNavigator } from "react-navigation";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";

const RouteConfigs = {
    review: { screen: ReviewScreen },
    settings: { screen: SettingsScreen }
};

//const BottomTabNavigatorConfig = {};
const ReviewFlowNavigator = createStackNavigator(RouteConfigs);

export default ReviewFlowNavigator;
