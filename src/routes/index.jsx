import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="Cadastre-se"
          component={Cadastro}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: { fontSize: 24 },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
