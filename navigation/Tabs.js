import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name
    });
  }, [route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
