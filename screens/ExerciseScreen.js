import { StyleSheet, Text, View } from 'react-native';
import PedoMeter from '../components/Pedometer';

export default function ExerciseScreen() {
    return (
        <View style={styles.container}>
            <Text>Your exercices will be shown here</Text>
            <PedoMeter />
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