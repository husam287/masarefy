import React, { useRef } from 'react';
import ScreenWrapper from 'components/general/ScreenWrapper';
import { Button } from 'native-base';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import COLORS from 'constants/Colors';
import { Controller, useForm } from 'react-hook-form';
import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ControllableInput from 'components/general/inputs/ControllableInput';
import showSuccessMsg from 'hooks/showSuccessMsg';
import ExpenseService from 'services/ExpenseService';
import moment from 'moment';
import HandleErrors from 'hooks/handleErrors';
import CalenderDateField from 'components/general/inputs/CalenderDateField';

function AddExpenses() {
  const reasonFieldRef = useRef(null);
  const moneyFieldRef = useRef(null);

  const schema = YUP.object().shape({
    reason: YUP.string().nullable().required(),
    money: YUP.number().nullable().required().moreThan(0),
    date: YUP.string().nullable().required(),
  });

  const {
    control, handleSubmit, reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { date: moment().format('YYYY/MM/DD') },
  });

  const onSubmitReasonField = () => {
    moneyFieldRef.current.focus();
  };

  const onSubmit = (value) => {
    ExpenseService.insertInto({
      money: value.money,
      reason: value.reason,
      date: moment(value?.date, 'YYYY/MM/DD').format('YYYY-MM-DD'),
    }).then(() => {
      reasonFieldRef.current.focus();
      reset({ date: value?.date });
      showSuccessMsg('New expense has been added!');
    }).catch((err) => { HandleErrors(err); });
  };

  return (
    <ScreenWrapper>
      <ControllableInput
        innerRef={reasonFieldRef}
        onSubmit={onSubmitReasonField}
        prefix={<Feather name="shopping-bag" size={18} color={COLORS.primary} />}
        placeholderText="Enter Reason..."
        name="reason"
        control={control}
      />

      <ControllableInput
        innerRef={moneyFieldRef}
        prefix={<MaterialIcons name="attach-money" size={18} color={COLORS.primary} />}
        placeholderText="Enter Money..."
        name="money"
        keyboard="number-pad"
        control={control}
      />

      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CalenderDateField
            placeholderText="Select A Date"
            onChange={onChange}
            value={value}
            errors={error}
            maxDate={moment().format('YYYY-MM-DD')}
          />
        )}
      />

      <Button
        mt="10"
        onPress={handleSubmit(onSubmit)}
        startIcon={<AntDesign name="plus" size={24} color={COLORS.light} />}
      >
        ADD
      </Button>
    </ScreenWrapper>
  );
}

export default AddExpenses;
