import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '~/stores/slice/roleSlice';
import { roleSelector } from '~/stores/selector';
import * as roleServices from '~/services/roleServices';

function Home() {
    const dispatch = useDispatch();
    const data = useSelector(roleSelector);
    const { roles } = data;
    // console.log('data', data);
    useEffect(() => {
        // dispatch(fetchRoles());
        const fetchApi = async () => {
            const res = await roleServices.getRole();
            console.log('aa', res);
        };
        fetchApi();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: '16.66%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 34, fontWeight: 500, color: 'black' }}>Welcome Barber Shop</Text>
            </View>
            <View style={{ width: '100%', height: '16.66%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        width: '60%',
                        height: 60,
                        borderRadius: 16,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 26, fontWeight: 400, color: 'white' }}>Add Role</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, borderWidth: 2 }}>
                {/* {roles?.map((role) => (
                    <Text
                        key={role?.roleID}
                        style={{ fontSize: 16, fontWeight: 400, color: 'black', margin: 8, marginBottom: 0 }}
                    >
                        {role?.roleName}
                    </Text>
                ))} */}
            </View>
        </View>
    );
}

export default Home;
