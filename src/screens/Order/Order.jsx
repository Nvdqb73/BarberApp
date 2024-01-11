import { View, ScrollView, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '~/components/OrderItem';
import BookDate from '~/components/BookDate';
import BookTime from '~/components/BookTime';
import BarberBook from '~/components/BarberBook';
import { bookingServiceSelector } from '~/stores/selector';
function Order({ ...props }) {
    const data = useSelector(bookingServiceSelector);

    const { openDatePicker, setOpenDatePicker, openTimePicker, setOpenTimePicker, date, setDate, time, setTime } =
        props;

    return (
        <View style={styles.wrapper}>
            <View style={styles.containerOrder}>
                <View style={styles.contentOrder}>
                    <ScrollView>
                        {data.books?.map((order, index) => (
                            <OrderItem key={index} data={order} index={index} />
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.containerBarber}>
                <View style={styles.contentBarber}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, color: '#FF9A3E', borderBottomWidth: 2, borderColor: '#FF9A3E' }}>
                            Show Barber
                        </Text>
                    </View>
                    <ScrollView>
                        {data.books?.map((order, index) => (
                            <BarberBook key={index} data={order} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.contentDateTime}>
                    <View style={styles.formBook}>
                        <Text style={styles.titleBook}>
                            {date !== null
                                ? `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
                                : 'Select Date'}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setOpenDatePicker(true);
                            }}
                        >
                            {openDatePicker ? (
                                <Icon name="chevron-up" size={25} color="#454545" style={styles.iconBok} />
                            ) : (
                                <Icon name="chevron-down" size={25} color="#454545" style={styles.iconBok} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <BookDate openDatePicker={openDatePicker} setOpenDatePicker={setOpenDatePicker} setDate={setDate} />
                    <View style={styles.formBook}>
                        <Text style={styles.titleBook}>
                            {time !== null
                                ? `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
                                : 'Select time'}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setOpenTimePicker(true);
                            }}
                        >
                            {openTimePicker ? (
                                <Icon name="chevron-up" size={25} color="#454545" style={styles.iconBok} />
                            ) : (
                                <Icon name="chevron-down" size={25} color="#454545" style={styles.iconBok} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <BookTime openTimePicker={openTimePicker} setOpenTimePicker={setOpenTimePicker} setTime={setTime} />
                </View>
            </View>
        </View>
    );
}

export default Order;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
    },
    containerOrder: {
        width: '100%',
        height: '46%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentOrder: {
        width: '94%',
        height: '100%',
        justifyContent: 'space-between',
    },
    containerBarber: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBarber: {
        width: '94%',
        height: '58%',
        marginBottom: 6,
        justifyContent: 'space-between',
    },
    contentDateTime: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    formBook: {
        width: '80%',
        height: 50,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleBook: {
        marginLeft: 18,
        fontSize: 20,
        color: 'rgba(60, 60, 60, 0.5)',
        fontWeight: '700',
    },
    iconBok: {
        marginRight: 18,
    },
});
