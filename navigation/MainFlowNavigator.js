import {createBottomTabNavigator} from "react-navigation";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewFlowNavigator from "./ReviewFlowNavigator";

const RouteConfigs = {
    deck: { screen: DeckScreen },
    map: { screen: MapScreen },
    review: ReviewFlowNavigator
};

//const BottomTabNavigatorConfig = {};
const MainFlowNavigator = createBottomTabNavigator(RouteConfigs);

export default MainFlowNavigator;
