import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseScreen() {
    return (
        <View style={styles.container}>
            <Text>Your exercices will be shown here</Text>
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