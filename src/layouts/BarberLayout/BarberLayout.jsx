import { StyleSheet, View } from 'react-native';
import HeaderBarber from '../components/HeaderBarber';
import Barber from '~/screens/Barber';

function BarberLayout({ navigation, route }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <HeaderBarber navigation={navigation} />
            </View>
            <View style={styles.content}>
                <Barber route={route} navigation={navigation} />
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
        flex: 1,
        marginTop: 20,
    },
});

export default BarberLayout;
