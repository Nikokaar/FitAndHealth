import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';


export default function NutritionScreen({ navigation }) {
    const [keyword, setKeyword] = useState("");
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);



    const handleFetch = () => {
        setLoading(true);
        setFoods([]);
        fetch("https://fineli.fi/fineli/api/v1/foods?q=" + keyword, {
            headers: { "User-Agent": "ReactNativeApp" } // Ei toiminut ennen tätä, johtunee Finelista
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Something went wrong in fetch: " + response.statusText);

                return response.json();
            })
            .then(data => setFoods(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }

    const handlePress = (item) => {
        navigation.navigate('NutritionDetails', { item });
    }

    return (
        <View style={styles.container}>
            <Text>You can search and add your daily meals here</Text>
            <TextInput
                style={{ width: 300, marginBlock: 10 }}
                label="keyword"
                mode="outlined"
                placeholder='Search for food'
                value={keyword}
                onChangeText={text => setKeyword(text)}
            />
            <Button
                loading={loading}
                mode="contained"
                icon="search-web"
                onPress={handleFetch}
            >
                Search
            </Button>

            <FlatList
                style={{ width: '90%', marginTop: 10 }}
                data={foods}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handlePress(item)}>
                        <Card style={{ margin: 15, fontSize: 20, fontWeight: 'bold' }}>
                            <Card.Title title={item.name.fi} />
                            <Card.Content>
                                <Text>{item.type.description.fi}</Text>
                            </Card.Content>
                        </Card>
                    </Pressable>
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
