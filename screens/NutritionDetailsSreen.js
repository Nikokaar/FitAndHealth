import { useState, useEffect } from 'react';
import { Text, TextInput, Button } from "react-native-paper";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function NutritionDetailsScreen({ route }) {
    const { item } = route.params;
    const [amount, setAmount] = useState('');
    // const [kcal, setKcal] = useState('');
    const [foodData, setFoodData] = useState([]);

    // console.log({ item });

    const handleSave = async (amount) => {
        const totalKcal = Number(amount) * item.energyKcal / 100;
        const foodEntry = {
            Name: item.name.fi,
            amount: amount,
            totalKcal: totalKcal.toFixed(0),
            timeStamp: Date.now(),
        };

        try {
            await AsyncStorage.setItem('foodEntry', JSON.stringify(foodEntry));
            Alert.alert('Saved successfully!');
        } catch (error) {
            Alert.alert('Error when saving data');
        }


        console.log({ foodEntry });



    };



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

    useEffect(() => {
        handleRead();
    }, []);


    return (
        <View style={styles.container}>
            <Text>{item.name.fi}</Text>
            <TextInput
                style={{ width: 120, marginBlock: 10 }}
                mode="outlined"
                keyboardType="numeric"
                label="amount"
                value={amount}
                right={<TextInput.Affix text="/g" />}
                onChangeText={amount => setAmount(amount)}
            />
            <Button
                mode="contained"
                onPress={() => handleSave(amount)}
            >
                Save food
            </Button>
            <FlatList
                style={{ width: '90%', marginTop: 10 }}
                data={foodData}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 5 }}>
                        <Text>{item.Name}</Text>
                        <Text>Amount: {item.amount} g</Text>
                        <Text>Total kcal: {item.totalKcal}</Text>
                    </View>
                )}

            />

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});