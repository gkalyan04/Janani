import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button : {
        padding: 10,
        backgroundColor: '#557f90',
        marginRight: 10
    },
    buttonText : {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        borderRadius: 30,
        position: 'absolute',
        top: 16,
        left: 48,
        right: 48,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2.5,
        borderColor: '#ccc',
        flexDirection: "row"
    }
});