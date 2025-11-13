import { Text } from "react-native-paper";
import { View, FlatList } from "react-native";


export default function NutritionDetailsScreen({ route }) {
    const { item } = route.params;
    console.log({ item });

    return (
        <View>

            <Text>Nutrition Details:</Text>
            <Text>{JSON.stringify(item, null, 2)}</Text>

        </View>
    );
}