import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { actions } from '~/stores/slice/bookingServiceSlice';
import config from '~/config';
function BarberItem({ data, dataService, navigation }) {
    const dispatch = useDispatch();
    const { id, serName, serPrice, serTime, images } = dataService;
    const handleClickBarber = (BarberID) => {
        dispatch(
            actions.addBookingService({
                serID: id,
                serName: serName,
                serPrice: serPrice,
                serTime: serTime,
                images: images,
                employeeID: BarberID,
                lastName: data?.lastName,
                firstName: data?.firstName,
                picture: data?.picture,
            }),
        );

        navigation.navigate(config.screens.homeLayout);
    };

    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: data?.picture }} style={{ width: 65, height: 73 }} />
            <View style={{ width: 170 }}>
                <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                    <Text style={styles.titleOrder}>{data?.lastName} </Text>
                    <Text style={styles.titleOrder}>{data?.firstName}</Text>
                </View>
                <Text style={styles.dateOfBirth}>Date of birth: {data?.dateOfBirth}</Text>
            </View>
            <TouchableOpacity style={styles.iconOrder} onPress={() => handleClickBarber(data?.employeeID)}>
                <Icon name="plus" size={40} color="#FAFAFA" />
            </TouchableOpacity>
        </View>
    );
}

export default BarberItem;

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
    dateOfBirth: {
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
