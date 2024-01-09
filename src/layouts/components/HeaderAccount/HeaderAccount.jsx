import { StatusBar, View, Text, TouchableOpacity } from 'react-native';

function HeaderAccount({ ...props }) {
    const { signIn, getStared, page, setPage } = props;

    const handleBorder = () => {
        if (page === signIn?.current) {
            setPage(getStared?.current);
        } else if (page === getStared?.current) {
            setPage(signIn?.current);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#4D8D6E" />
            <View style={{ width: '100%', height: '100%' }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#4D8D6E',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 40, fontWeight: 600, color: '#fff' }}>barber.</Text>
                    <Text style={{ fontSize: 16, fontWeight: 400, color: '#fff' }}>think for nature</Text>
                </View>
                <View
                    style={{
                        height: 60,
                        flexDirection: 'row',
                        backgroundColor: '#fff',
                    }}
                >
                    <TouchableOpacity
                        style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={handleBorder}
                        disabled={page === signIn?.current ? true : false}
                    >
                        <Text style={{ fontSize: 22, color: '#4D8D6E' }}>Sign in</Text>
                        {page === 'SING_IN' ? (
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    height: 3,
                                    backgroundColor: '#4D8D6E',
                                }}
                            ></View>
                        ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '50%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={handleBorder}
                        disabled={page === getStared?.current ? true : false}
                    >
                        <Text style={{ fontSize: 22, color: '#4D8D6E' }}>Get Stared</Text>
                        {page === getStared?.current ? (
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    height: 3,
                                    backgroundColor: '#4D8D6E',
                                }}
                            ></View>
                        ) : null}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default HeaderAccount;
