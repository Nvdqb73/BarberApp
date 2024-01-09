import { Dimensions, Text, View } from 'react-native';

function FooterAccount() {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    width: windowWidth - 60,
                    marginLeft: 30,
                }}
            >
                <View style={{ width: 100, height: 3, backgroundColor: '#333' }} />
                <Text style={{ marginLeft: 4, marginRight: 4, color: '#333', fontWeight: 600, fontSize: 14 }}>
                    Or connect width
                </Text>
                <View style={{ width: 100, height: 3, backgroundColor: '#333' }} />
            </View>
            {/* <View style={{ height: 50, width: windowWidth - 60, borderWidth: 2, marginLeft: 30 }}>
                <Image />
            </View> */}
        </View>
    );
}

export default FooterAccount;
