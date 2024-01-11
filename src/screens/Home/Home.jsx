import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ServicesItem from '~/components/ServicesItem';
import { fetchServices } from '~/stores/slice/servicesSlice';
import { serviceSelector } from '~/stores/selector';
function Home({ navigation }) {
    const dispatch = useDispatch();
    const { servicesList } = useSelector(serviceSelector);

    useEffect(() => {
        dispatch(fetchServices());
    }, []);

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={{ width: '94%', height: '100%', justifyContent: 'space-between' }}>
                <ScrollView>
                    {servicesList?.map((service, index) => (
                        <ServicesItem key={index} data={service} navigation={navigation} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default Home;
