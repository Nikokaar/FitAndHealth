import { useState } from 'react';
import { View } from 'react-native';
import { styles } from "../styles/styles";
import { Divider, Text, Button } from 'react-native-paper';

export default function SettingsScreen() {

    const [sex, setSex] = useState('Valitse');
    const [age, setAge] = useState('Valitse');
    const [length, setLength] = useState('Valitse');
    const [weight, setWeigth] = useState('Valitse');

    const sexPressed = () => {
        setSex('Mies');
    }
    return (
        <View style={styles.divider}>

            <View style={styles.row}>
                <Text style={styles.dividerText}>Sukupuoli</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={sexPressed}

                >
                    {sex}
                </Button>
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Ikä</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={() => console.log("Button pressed")}

                >
                    {sex}
                </Button>
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Pituus</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={() => console.log("Button pressed")}

                >
                    {sex}
                </Button>
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Paino</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={() => console.log("Button pressed")}

                >
                    {sex}
                </Button>
            </View>
            <Divider />
        </View>
    );
}

