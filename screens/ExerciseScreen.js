import { StyleSheet, Text, View } from 'react-native';
import PedoMeter from '../components/Pedometer';
import { styles } from "../styles/styles";

export default function ExerciseScreen() {
    return (
        <View style={styles.container}>
            <Text>Your exercices will be shown here</Text>
            <PedoMeter />
        </View>
    );
}

