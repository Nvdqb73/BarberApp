import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CommonActions } from '@react-navigation/native';

import config from '~/config';
function ServicesItem({ data, navigation }) {
    const handleClickEmployee = (id) => {
        navigation.dispatch(
            CommonActions.navigate({
                name: `${config.screens.barberLayout}`,
                params: {
                    id,
                    serName: data?.serName,
                    serPrice: data?.serPrice,
                    serTime: data?.serTime,
                    images: data?.images,
                },
            }),
        );
    };
    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: data?.images }} style={{ width: 65, height: 73 }} />
            <View style={{ width: 170 }}>
                <Text style={styles.titleService}>{data?.serName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>Price: {data?.serPrice}</Text>
                    <Text style={styles.price}>{data?.serTime} min</Text>
                </View>
                <Text style={styles.descriptionService}>{data?.serDescription}</Text>
            </View>
            <TouchableOpacity style={styles.iconService} onPress={() => handleClickEmployee(data?.serID)}>
                <Icon
                    name="plus"
                    size={40}
                    color="#FAFAFA"
                    style={{
                        shadowColor: 'rgba(0, 0, 0, 0.45)',
                        shadowOffset: { width: 8, height: 3 },
                        shadowOpacity: 0.45,
                        shadowRadius: 3,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default ServicesItem;

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
    titleService: {
        fontSize: 24,
        fontWeight: '400',
        color: '#000000',
    },
    iconService: {
        width: 53,
        height: 52,
        backgroundColor: '#BD89FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    descriptionService: {
        flexWrap: 'wrap',
        width: '100%',
        fontSize: 13,
        fontWeight: '400',
        color: '#868686',
    },
    price: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
    },
});
