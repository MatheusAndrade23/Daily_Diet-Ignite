import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="new-meal"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="home" component={Home} />
      <Screen name="meal" component={Meal} />
      <Screen name="new-meal" component={NewMeal} />
    </Navigator>
  );
};
