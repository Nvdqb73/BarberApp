import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HeaderHome({ navigation }) {
    const handleDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon name="angle-left" size={40} color="#FAFAFA" style={styles.headerBack} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('~/assets/images/profileIcon1.png')} style={styles.headerImage} />
                    <Text color="#FAFAFA" style={styles.headerText}>
                        Junior
                    </Text>
                </View>

                <TouchableOpacity onPress={handleDrawer}>
                    <Icon name="bars" size={40} color="#FAFAFA" style={styles.headerMenu} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderHome;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
    },
    container: {
        width: '93%',
        marginLeft: 14,
        borderBottomWidth: 2,
        borderColor: '#FAFAFA',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerBack: {
        marginLeft: 4,
        padding: 4,
    },
    headerImage: {
        width: 138,
        height: 137,
    },
    headerText: {
        fontSize: 48,
        fontWeight: '400',
        marginTop: 12,
        color: '#FAFAFA',
    },
    headerMenu: {
        padding: 4,
        marginRight: 4,
    },
});
