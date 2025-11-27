import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from "../styles/styles";

export default function HomeScreen() {

    const [foodData, setFoodData] = useState([]);

    const handleRead = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('foodEntry');
            if (jsonValue != null) {
                const foodEntry = JSON.parse(jsonValue);
                setFoodData([foodEntry]);
            }
        } catch (error) {
            Alert.alert('Error when reading data');
        }
    }

    useFocusEffect(
        useCallback(() => {
            handleRead();
        }, [])
    );


    return (
        <View style={styles.container}>
            <Text>Welcome to FitAndHealth App!</Text>
            <Text>Foods eaten today:</Text>
            <FlatList
                style={{ width: '90%' }}
                data={foodData}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 20 }}>
                        <Text>{new Date(item.timeStamp).toLocaleString()}</Text>
                        <Text>{item.Name}</Text>
                        <Text>Amount: {item.amount} g</Text>
                        <Text>Total kcal: {item.totalKcal}</Text>
                        <Text>Protein: {item.totalProtein}</Text>
                        <Text>Carbohydrates: {item.totalCarboHydrate}</Text>
                        <Text>Fat: {item.totalFat}</Text>
                    </View>
                )}

            />
        </View>
    );
}

