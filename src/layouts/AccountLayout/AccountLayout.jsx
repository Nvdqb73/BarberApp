import { View } from 'react-native';
import { useRef, useState } from 'react';
import HeaderAccount from '../components/HeaderAccount';
import Login from '~/screens/Login';
import FooterAccount from '../components/FooterAccount';

function AccountLayout() {
    const signIn = useRef('SING_IN');
    const getStared = useRef('GET_STARED');
    const [page, setPage] = useState(signIn?.current);
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <View style={{ height: '25%', width: '100%' }}>
                <HeaderAccount signIn={signIn} getStared={getStared} page={page} setPage={setPage} />
            </View>
            <View style={{ height: '45%', width: '100%', backgroundColor: '#F5F5F5' }}>
                {page === signIn?.current ? <Login /> : null}
            </View>
            <View style={{ flex: 1 }}>
                <FooterAccount />
            </View>
        </View>
    );
}

export default AccountLayout;
