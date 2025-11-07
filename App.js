import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import NutritionScreen from "./screens/NutritionScreen";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Exercises') {
              iconName = 'fitness';
            } else if (route.name === 'Nutrition') {
              iconName = 'fast-food';  
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,       // Piilottaa tai näyttää yläpalkin
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Exercises" component={ExerciseScreen} />
        <Tab.Screen name="Nutrition" component={NutritionScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}