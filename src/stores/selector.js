import { createSelector } from '@reduxjs/toolkit';
export const serviceSelector = (state) => state?.services;
export const serviceEmployeesSelector = (state) => state?.serviceEmployees;
export const bookingServiceSelector = (state) => state?.bookingServices;

// export const servicesRemainingSelector = createSelector(
//     serviceSelector,
//     serviceEmployeesSelector,
//     (service, serviceEmployee) => {
//         const { serviceEmployeeList } = serviceEmployee;
//         const { servicesList } = service;
//         const servicesRemaining = [];
//         console.log('serviceEmployeeList', serviceEmployeeList);
//         console.log('servicesList', servicesList);

//         serviceEmployeeList.reduce((acc, serviceEmployee) => {
//             if (servicesList.includes(serviceEmployee.serID)) {
//                 acc.push(serviceEmployee);
//             }

//             return acc;
//         }, servicesRemaining);
//         return servicesRemaining;

//         // return serviceEmployeeList?.filter((serviceEmployeeList) => {
//         //     return servicesList.includes(serviceEmployeeList.serID);
//         // });
//     },
// );
