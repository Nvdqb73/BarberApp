import { StyleSheet, View } from 'react-native';
import HeaderHome from '../components/HeaderHome';
import FooterHome from '../components/FooterHome';
import Home from '~/screens/Home';
function HomeLayout({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <HeaderHome navigation={navigation} />
            </View>
            <View style={styles.content}>
                <Home navigation={navigation} />
            </View>
            <View style={styles.footer}>
                <FooterHome navigation={navigation} />
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
        height: '33.33%',
        width: '100%',
        marginTop: 18,
    },
    content: {
        height: '48%',
        width: '100%',
        marginTop: 20,
    },
    footer: {
        flex: 1,
    },
});

export default HomeLayout;
