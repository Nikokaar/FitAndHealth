import { useState } from 'react';
import { View } from 'react-native';
import { styles } from "../styles/styles";
import { Dialog, Divider, Text, TextInput, Button, Portal } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {



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





    return (
        <View style={styles.divider}>

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
            <Divider />
        </View>
    );
}

