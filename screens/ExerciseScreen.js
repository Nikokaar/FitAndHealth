import { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import PedoMeter from '../components/Pedometer';
import { styles } from "../styles/styles";
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExerciseScreen() {

    const [exercise, setExercise] = useState("");
    const [exercises, setExercises] = useState([]);


    const handleSave = async () => {
        const entry = {
            name: exercise,
            timeStamp: Date.now()
        };

        const updatedExercises = [entry, ...exercises]
        setExercises(updatedExercises);
        console.log(exercises);

        handleSave = async () => {
            try {
                await AsyncStorage.setItem('entry', JSON.stringify(entry));
            } catch (error) {
                Alert.alert('Error when saving data');
            }
        }

    }

    return (
        <View style={styles.container}>

            <PedoMeter />

            <Text>Lisää liikuntasuoritus</Text>
            <View style={styles.picker}>
                <Picker
                    mode='dialog'
                    prompt='Valitse laji'
                    selectedValue={exercise}
                    onValueChange={(itemValue, itemIndex) =>
                        setExercise(itemValue)
                    }>
                    <Picker.Item label="Golf" value="Golf" />
                    <Picker.Item label="Tennis" value="Tennis" />
                    <Picker.Item label="Uinti" value="Uinti" />
                </Picker>
            </View>
            <Button
                mode='contained'
                marginTop='10'
                onPress={handleSave}
            >
                Tallenna suoritus
            </Button>
            <FlatList
                data={exercises}
                renderItem={({ item }) =>
                    <View style={[styles.row, { width: '90%' }]}>
                        <Text>{new Date(item.timeStamp).toLocaleString()}</Text>
                        <Text>{item.name}</Text>
                    </View>
                }
            />
        </View>
    );
}

