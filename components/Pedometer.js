import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function PedoMeter() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);


    const subscribe = async () => {
        const { status } = await Pedometer.requestPermissionsAsync();
        console.log({ status });
        if (status === 'granted') {
            const isAvailable = await Pedometer.isAvailableAsync();
            setIsPedometerAvailable(String(isAvailable));

            if (isAvailable) {
                const end = new Date();
                const start = new Date();
                start.setDate(end.getDate() - 1);

                const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
                if (pastStepCountResult) {
                    setPastStepCount(pastStepCountResult.steps);
                }


                const subscription = Pedometer.watchStepCount(result => {
                    setCurrentStepCount(result.steps);
                });

                return subscription;
            }
        } else {
            setIsPedometerAvailable('permission denied');
        }
    };


    useEffect(() => {
        let subscription;
        (async () => {
            subscription = await subscribe();
        })();

        return () => {
            if (subscription) subscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
            <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
            <Text>Walk! And watch this go up: {currentStepCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

