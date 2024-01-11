import { StyleSheet, View } from 'react-native';
import Buy from '~/screens/Buy';
import HeaderBook from '../components/HeaderBuy';
import FooterBuy from '../components/FooterBuy';
import { useState } from 'react';

function BuyLayout({ route, navigation }) {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <HeaderBook navigation={navigation} />
            </View>
            <View style={styles.content}>
                <Buy route={route} navigation={navigation} setDate={setDate} setTime={setTime} />
            </View>
            <View style={styles.footer}>
                <FooterBuy date={date} time={time} navigation={navigation} />
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
        height: '64%',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 20,
    },
    footer: {
        flex: 1,
    },
});

export default BuyLayout;
