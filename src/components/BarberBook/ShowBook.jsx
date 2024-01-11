import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ShowBook({ data }) {
    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: data?.picture }} style={{ width: 65, height: 73 }} />
            <View style={{ width: 170 }}>
                <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                    <Text style={styles.titleOrder}>{data?.lastName} </Text>
                    <Text style={styles.titleOrder}>{data?.firstName}</Text>
                </View>
            </View>
        </View>
    );
}

export default ShowBook;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 109,
        backgroundColor: '#F1EEEE',
        borderRadius: 19,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    titleOrder: {
        fontSize: 24,
        fontWeight: '400',
        color: '#000000',
    },
    price: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
    },
    iconOrder: {
        width: 53,
        height: 52,
        borderRadius: 12,
        backgroundColor: '#BD89FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
