export { default } from './Order';

// <View
//     style={{
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'red',
//         alignItems: 'center',
//         paddingLeft: 20,
//     }}
// >
//     <Text style={{ fontSize: 30, color: 'black' }}>Date:</Text>
//     <TouchableOpacity
//         onPress={() => {
//             setOpenDatePicker(true);
//         }}
//     >
//         <Text
//             style={{ fontSize: 30, color: 'black' }}
//         >{`${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`}</Text>
//     </TouchableOpacity>
//     <DatePicker
//         modal
//         mode={'date'}
//         open={openDatePicker}
//         date={new Date()}
//         onConfirm={(newDate) => {
//             setDate(newDate);
//             setOpenDatePicker(false);
//         }}
//         onCancel={() => {
//             setOpenDatePicker(false);
//         }}
//     />
// </View>

// <View
//     style={{
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'green',
//         alignItems: 'center',
//         paddingLeft: 20,
//     }}
// >
//     <Text style={{ fontSize: 30, color: 'black' }}>Date:</Text>
//     <TouchableOpacity
//         onPress={() => {
//             setOpenTimePicker(true);
//         }}
//     >
//         <Text
//             style={{ fontSize: 30, color: 'black' }}
//         >{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</Text>
//     </TouchableOpacity>
//     <DatePicker
//         modal
//         mode={'time'}
//         open={openTimePicker}
//         date={new Date()}
//         onConfirm={(newTime) => {
//             setTime(newTime);
//             setOpenTimePicker(false);
//         }}
//         onCancel={() => {
//             setOpenTimePicker(false);
//         }}
//     />
// </View>
