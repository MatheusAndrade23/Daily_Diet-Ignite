import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="meal" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
};
