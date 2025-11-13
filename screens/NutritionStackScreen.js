import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NutritionScreen from './NutritionScreen';
import NutritionDetailsScreen from './NutritionDetailsSreen';


const NutritionStack = createNativeStackNavigator();

export default function NutritionStackScreen() {
    return (
        <NutritionStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <NutritionStack.Screen name="Nutrition" component={NutritionScreen} />
            <NutritionStack.Screen name="NutritionDetails" component={NutritionDetailsScreen} />
        </NutritionStack.Navigator>

    );
}