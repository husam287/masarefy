import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from 'constants/Colors';
import ReactNativeModernDatepicker from 'react-native-modern-datepicker';
import { Button } from 'native-base';
import PureInput from './PureInput';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.light,
    borderRadius: 30,
    padding: 30,
  },
});

export default function CalenderDateField(
  {
    onChange,
    value,
    errors,
    placeholderText,
    minDate,
    maxDate,
    disabled,
  },
) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onShowModal = () => {
    setIsModalVisible(true);
  };

  const onDismissModal = () => {
    setIsModalVisible(false);
  };

  const onSelectDate = (date) => {
    setSelectedDay(date);
  };

  const confirmSelectionDay = () => {
    onChange(selectedDay);
    onDismissModal();
  };

  useEffect(() => {
    if (!isModalVisible) return;
    if (!value) return;

    onSelectDate({ dateString: value });
  }, [isModalVisible, value]);

  const ModalMarkup = (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onDismissModal}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={styles.modalContainer}>
        <ReactNativeModernDatepicker
          onSelectedChange={(date) => onSelectDate(date)}
          mode="calendar"
          selected={value}
          minimumDate={minDate}
          maximumDate={maxDate}
          options={{
            mainColor: COLORS.primary,
          }}
        />

        <Button onPress={confirmSelectionDay}>
          Confirm
        </Button>
      </View>
    </ReactNativeModal>
  );

  return (
    <View>
      <TouchableOpacity disabled={disabled} onPress={onShowModal}>
        <PureInput
          customColorInDisableState={disabled ? COLORS.dark : COLORS.darkGrey}
          placeholderText={placeholderText}
          editable={false}
          value={value}
          error={errors}
          suffix={<MaterialIcons name="date-range" size={24} color={COLORS.primary} />}
        />
      </TouchableOpacity>

      {ModalMarkup}
    </View>
  );
}
