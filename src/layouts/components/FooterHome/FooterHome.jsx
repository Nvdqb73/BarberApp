import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { bookingServiceSelector } from '~/stores/selector';
import config from '~/config';
function FooterHome({ navigation }) {
    const data = useSelector(bookingServiceSelector);

    const handleClickOder = () => {
        navigation.navigate(config.screens.orderLayout);
    };

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={handleClickOder}>
                <View
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 4,
                        backgroundColor: '#ffff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        transform: [{ translateX: 10 }, { translateY: 4 }],
                    }}
                >
                    <Text style={{ fontSize: 20, color: 'black' }}>{data?.books.length}</Text>
                </View>

                <Image source={require('~/assets/images/tag.png')} style={styles.headerImageTop} />
            </TouchableOpacity>
        </View>
    );
}

export default FooterHome;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    headerImageTop: {
        position: 'relative',
        zIndex: 3,
    },
    headerImageBottom: {
        position: 'relative',
        zIndex: 1,
    },
});
