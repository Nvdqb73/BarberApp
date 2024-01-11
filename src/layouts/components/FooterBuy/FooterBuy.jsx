import { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { bookingServiceSelector } from '~/stores/selector';
import * as bookingService from '~/services/bookingService';

function FooterOrder({ date, time, navigation }) {
    const data = useSelector(bookingServiceSelector);
    // console.log('date', date);
    // console.log('time', time);

    const handleFinishBook = async () => {
        const data = {
            dateFounded: date,
            startTime: time,
            note: 'đẹp',
        };
        const res = await bookingService.postBooking(data);
        console.log('res iu', res);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.containerFooter}>
                <View style={[styles.contentFooter, styles.borderFooter]}>
                    <Text style={styles.titleFooter}>Total:</Text>
                    <Text style={styles.priceFooter}> {data?.total}</Text>
                </View>
                <View style={styles.contentFooter}>
                    <Text style={styles.titleFooter}>Date:</Text>
                    <Text style={styles.priceFooter}> 1h30</Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 60,
                    borderRadius: 18,
                    backgroundColor: '#FF9A3E',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={handleFinishBook}
            >
                <Text style={{ fontSize: 32, color: '#F1EEEE', fontWeight: '500' }}>Finish</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FooterOrder;
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    containerFooter: {
        width: '80%',
        height: 70,
        backgroundColor: '#F1EEEE',
        justifyContent: 'center',
        borderRadius: 12,
    },
    contentFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
    },
    titleFooter: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000',
    },
    borderFooter: {
        borderBottomColor: '#EF4A72',
        borderBottomWidth: 2,
    },
    priceFooter: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000',
    },
});
