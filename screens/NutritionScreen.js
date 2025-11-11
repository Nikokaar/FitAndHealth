import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function NutritionScreen() {
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
                data={foods}
                renderItem={({ item }) => (
                    <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name.fi}</Text>
                        <Text>{item.type.description.fi}</Text>
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
