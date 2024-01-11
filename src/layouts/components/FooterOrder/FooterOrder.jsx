import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import moment from 'moment';
import config from '~/config';
function FooterOrder({ navigation, date, time }) {
    const dateString = moment(date).format('YYYY-MM-DD');
    const timeString = moment(time).format('HH:mm:ss');
    const handlerClickBuy = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: `${config.screens.buyLayout}`,
                params: {
                    date: dateString,
                    time: timeString,
                },
            }),
        );
    };
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 60,
                    borderRadius: 18,
                    backgroundColor: '#FF9A3E',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={handlerClickBuy}
            >
                <Text style={{ fontSize: 32, color: '#F1EEEE', fontWeight: '500' }}>Continue</Text>
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
});
