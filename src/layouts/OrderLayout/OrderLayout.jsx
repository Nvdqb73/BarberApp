import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderOrder from '../components/HeaderOrder';
import Order from '~/screens/Order';
import FooterOrder from '../components/FooterOrder';

function OrderLayout({ navigation }) {
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [openTimePicker, setOpenTimePicker] = useState(false);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <HeaderOrder navigation={navigation} />
            </View>
            <View style={styles.content}>
                <Order
                    openDatePicker={openDatePicker}
                    setOpenDatePicker={setOpenDatePicker}
                    openTimePicker={openTimePicker}
                    setOpenTimePicker={setOpenTimePicker}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                />
            </View>
            <View style={styles.footer}>
                <FooterOrder navigation={navigation} date={date} time={time} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#302238',
    },
    header: {
        height: '10%',
        width: '100%',
        marginTop: 18,
    },
    content: {
        height: '68%',
        width: '100%',
    },
    footer: {
        flex: 1,
    },
});

export default OrderLayout;
