import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import LoadingComponent from './LoadingComponent';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  SettingRowText: {
    fontSize: 14,
    ...GLOBAL_STYLES.font500,
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  sepLine: {
    backgroundColor: COLORS.secondary,
    height: 1,
    marginVertical: 2,
    opacity: 0.2,
    width: '100%',
  },
  spacingVertical20: {
    marginVertical: 10,
    paddingVertical: 10,
  },
});

function ArrowGoIcon({ color = COLORS.mainColor }) {
  return <AntDesign name="arrowright" size={18} color={color} />;
}

export default function ClickableRow({
  text,
  rightComponent,
  textColor = COLORS.dark,
  arrowColor = COLORS.dark,
  onPress = () => {},
  prefix,
  isLoading,
}) {
  const textColorStyle = { color: textColor };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            GLOBAL_STYLES.row,
            styles.justifyContentBetween,
            styles.spacingVertical20,
            styles.shadowContainer,
          ]}
        >
          <View style={GLOBAL_STYLES.row}>
            {prefix}
            <CustomText style={[styles.SettingRowText, textColorStyle]}>
              {text}
            </CustomText>
          </View>
          {isLoading
            ? <LoadingComponent />
            : rightComponent || <ArrowGoIcon color={arrowColor} />}
        </View>
      </TouchableOpacity>
      <View style={styles.sepLine} />
    </View>
  );
}
