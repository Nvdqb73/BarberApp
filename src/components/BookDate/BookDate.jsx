import DatePicker from 'react-native-date-picker';
import { View } from 'react-native';
function Book({ ...props }) {
    const { openDatePicker, setOpenDatePicker, setDate } = props;
    return (
        <View style={{ flex: 1 }}>
            <DatePicker
                modal
                mode="date"
                open={openDatePicker}
                date={new Date()}
                onConfirm={(newDate) => {
                    setDate(newDate);
                    setOpenDatePicker(false);
                }}
                onCancel={() => {
                    setOpenDatePicker(false);
                }}
                minimumDate={new Date()}
            />
        </View>
    );
}

export default Book;
