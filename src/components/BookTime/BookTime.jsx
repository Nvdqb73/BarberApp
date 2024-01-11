import DatePicker from 'react-native-date-picker';
import { View } from 'react-native';
function Book({ ...props }) {
    const { openTimePicker, setOpenTimePicker, setTime } = props;
    return (
        <View style={{ flex: 1 }}>
            <DatePicker
                modal
                mode={'time'}
                open={openTimePicker}
                date={new Date()}
                onConfirm={(newTime) => {
                    setTime(newTime);
                    setOpenTimePicker(false);
                }}
                onCancel={() => {
                    setOpenTimePicker(false);
                }}
                androidVariant="nativeAndroid"
            />
        </View>
    );
}

export default Book;
