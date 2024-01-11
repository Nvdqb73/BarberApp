import { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '~/components/OrderItem';
import { bookingServiceSelector } from '~/stores/selector';
function Buy({ route, setDate, setTime }) {
    const data = useSelector(bookingServiceSelector);
    const { date, time } = route.params;
    useEffect(() => {
        setDate(date);
        setTime(time);
    }, [date, time]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.containerOrder}>
                <View style={styles.contentOrder}>
                    <ScrollView>
                        {data?.books?.map((order, index) => (
                            <OrderItem key={index} data={order} index={index} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default Buy;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    containerOrder: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentOrder: {
        width: '94%',
        height: '100%',
        justifyContent: 'space-between',
    },
});
