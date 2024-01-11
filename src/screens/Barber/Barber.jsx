import { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { fetchServiceEmployee } from '~/stores/slice/serviceEmployeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { serviceEmployeesSelector } from '~/stores/selector';
import BarberItem from '~/components/BarberItem';
import * as employeeService from '~/services/employeeService';

function Barber({ route, navigation }) {
    const dispatch = useDispatch();
    const dataService = route?.params;
    const { id } = dataService;
    const { serviceEmployeeList } = useSelector(serviceEmployeesSelector);
    const [employees, setEmployees] = useState([]);
    const [employeeFilter, setEmployeeFilter] = useState([]);

    useEffect(() => {
        dispatch(fetchServiceEmployee());
    }, []);

    useEffect(() => {
        const employeeNew = serviceEmployeeList.filter((serviceEmployee) => {
            return serviceEmployee?.serID === id;
        });
        if (employeeNew) {
            setEmployees(employeeNew);
        }
    }, [serviceEmployeeList, id]);

    useEffect(() => {
        async function processEmployees() {
            const results = await Promise.all(
                employees.map((employee) => {
                    return employeeService.getEmployeeId(employee?.employeeID);
                }),
            );

            const filteredResults = results.filter((result) => result);
            setEmployeeFilter(filteredResults);
        }

        processEmployees();
    }, [employees, employeeService]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.contentOrder}>
                <ScrollView>
                    {employeeFilter?.map((barber, index) => (
                        <BarberItem key={index} data={barber} dataService={dataService} navigation={navigation} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default Barber;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentOrder: {
        width: '94%',
        height: '100%',
        justifyContent: 'space-between',
    },
    containerBarber: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 20,
    },
});
