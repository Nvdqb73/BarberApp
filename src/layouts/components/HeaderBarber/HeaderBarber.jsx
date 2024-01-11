import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HeaderBarber({ navigation }) {
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBack}>
                    <Icon name="angle-left" size={40} color="#FAFAFA" style={styles.headerBack} />
                </TouchableOpacity>

                <View>
                    <Text color="#FAFAFA" style={styles.headerText}>
                        Barber
                    </Text>
                </View>

                <TouchableOpacity>
                    <Icon name="user-circle" size={40} color="#FAFAFA" style={styles.headerMenu} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderBarber;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
    },
    container: {
        width: '93%',
        marginLeft: 14,
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
        fontSize: 34,
        fontWeight: '400',
        color: '#FAFAFA',
    },
    headerMenu: {
        padding: 4,
        marginRight: 4,
    },
});
