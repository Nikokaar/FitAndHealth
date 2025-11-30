import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { styles } from "../styles/styles";
import { Dialog, Divider, Text, TextInput, Button, Portal } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {


    const [name, setName] = useState('Nimesi')
    const [sex, setSex] = useState('Valitse');
    const [age, setAge] = useState('Valitse');
    const [height, setHeight] = useState('Valitse');
    const [weight, setWeight] = useState('Valitse');

    const [sexDialogVisible, setSexDialogVisible] = useState(false);
    const [ageDialogVisible, setAgeDialogVisible] = useState(false);
    const [heightDialogVisible, setHeightDialogVisible] = useState(false);
    const [weightDialogVisible, setWeightDialogVisible] = useState(false);

    const showSexDialog = () => setSexDialogVisible(true);
    const hideSexDialog = () => setSexDialogVisible(false);

    const showAgeDialog = () => {
        setAgeDialogVisible(true);
        setAge(null);
    };

    const hideAgeDialog = () => setAgeDialogVisible(false);

    const showHeightDialog = () => {
        setHeightDialogVisible(true);
        setHeight(null);

    };
    const hideHeightDialog = () => setHeightDialogVisible(false);

    const showWeightDialog = () => {
        setWeightDialogVisible(true);
        setWeight(null);
    };
    const hideWeightDialog = () => setWeightDialogVisible(false);

    // Function to save user data
    const saveUserData = async () => {
        const userData = {
            name: name,
            sex: sex,
            age: age,
            height: height,
            weight: weight
        };

        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            alert('Tiedot tallennettu')
        } catch (error) {
            Alert.alert('Error when saving data');
        }
    };

    // Function to read user Data from Async-storage
    const readUserData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData');
            if (jsonValue != null) {
                const userData = JSON.parse(jsonValue);
                setName(userData.name || 'Nimesi');
                setSex(userData.sex || 'Valitse');
                setAge(userData.age || 'Valitse');
                setHeight(userData.height || 'Valitse');
                setWeight(userData.weight || 'Valitse');
            }
        } catch (error) {
            Alert.alert('Error when reading data');
        }
    }

    useEffect(() => {
        readUserData();
    }, []);







    return (


        <View style={styles.divider}>

            <View style={styles.row}>
                <Text style={styles.dividerText}>Nimesi</Text>
                <TextInput
                    style={{ width: 200, marginBlock: 10 }}
                    label="Nimi"
                    mode="outlined"
                    keyboardType="default"
                    placeholder='Nimesi'
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Sukupuoli</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={showSexDialog}

                >
                    {sex}
                </Button>
                <Portal>
                    <Dialog visible={sexDialogVisible} onDismiss={hideSexDialog}>
                        <Dialog.Title>Valitse sukupuoli</Dialog.Title>
                        <Dialog.Content>
                            <Picker
                                selectedValue={sex}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSex(itemValue)
                                }>
                                <Picker.Item label="Mies" value="Mies" />
                                <Picker.Item label="Nainen" value="Nainen" />
                            </Picker>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideSexDialog}>Tallenna</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Ikä</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={showAgeDialog}

                >
                    {age}
                </Button>
                <Portal>
                    <Dialog visible={ageDialogVisible} onDismiss={hideAgeDialog}>
                        <Dialog.Title>Ilmoita Ikäsi</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                style={{ width: 280, marginBlock: 10 }}
                                label="Ikäsi"
                                mode="outlined"
                                keyboardType='numeric'
                                placeholder='Ikäsi'
                                value={age}
                                onChangeText={text => setAge(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideAgeDialog}>Tallenna</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Pituus</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={showHeightDialog}

                >
                    {height}
                </Button>
                <Portal>
                    <Dialog visible={heightDialogVisible} onDismiss={hideHeightDialog}>
                        <Dialog.Title>Ilmoita pituutesi</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                style={{ width: 280, marginBlock: 10 }}
                                label="Pituutesi"
                                mode="outlined"
                                keyboardType='numeric'
                                placeholder='Pituutesi'
                                right={<TextInput.Affix text="/cm" />}
                                value={height}
                                onChangeText={text => setHeight(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideHeightDialog}>Tallenna</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <Divider />
            <View style={styles.row}>
                <Text style={styles.dividerText}>Paino</Text>
                <Button
                    style={{ alignSelf: 'flex-start' }}
                    mode="contained"
                    onPress={showWeightDialog}

                >
                    {weight}
                </Button>
                <Portal>
                    <Dialog visible={weightDialogVisible} onDismiss={hideWeightDialog}>
                        <Dialog.Title>Ilmoita painosi</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                style={{ width: 280, marginBlock: 10 }}
                                label="Painosi"
                                mode="outlined"
                                keyboardType='numeric'
                                placeholder='Painosi'
                                right={<TextInput.Affix text="/kg" />}
                                value={weight}
                                onChangeText={text => setWeight(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideWeightDialog}>Tallenna</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Button
                    style={{ alignItems: 'center' }}
                    mode="contained"

                    onPress={saveUserData}
                >
                    Tallenna
                </Button>

            </View>
            <Divider />
        </View>

    );
}

