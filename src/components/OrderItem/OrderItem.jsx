import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { actions } from '~/stores/slice/bookingServiceSlice';

function OrderItem({ data, index }) {
    const dispatch = useDispatch();

    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: data?.images }} style={{ width: 65, height: 73 }} />
            <View style={{ width: 170 }}>
                <Text style={styles.titleOrder}>{data?.serName}</Text>
                <Text style={styles.price}>Price: {data?.serPrice}</Text>
                <Text style={styles.price}>{data?.serTime} min</Text>
            </View>
            <TouchableOpacity
                style={styles.iconOrder}
                onPress={() => {
                    dispatch(actions.removeBookingService(index));
                }}
            >
                <Icon name="trash-alt" size={40} color="#FAFAFA" />
            </TouchableOpacity>
        </View>
    );
}

export default OrderItem;

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
