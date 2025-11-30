import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    divider: {
        marginVertical: 8,
    },
    dividerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10,
    },

    picker: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'grey',
        width: '80%',
        //marginBottom: 450
    }

});