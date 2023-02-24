import ScreenWrapper from 'components/general/ScreenWrapper';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import React from 'react';
import COLORS from 'constants/Colors';
import { useForm } from 'react-hook-form';
import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ControllableInput from 'components/general/inputs/ControllableInput';
import { Button } from 'native-base';

function AddExpenses() {
  const schema = YUP.object().shape({
    reason: YUP.string().required(),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {

  };

  return (
    <ScreenWrapper>
      <ControllableInput
        prefix={<Feather name="shopping-bag" size={18} color={COLORS.primary} />}
        placeholderText="Enter Reason..."
        name="reason"
        control={control}
      />

      <ControllableInput
        prefix={<MaterialIcons name="attach-money" size={18} color={COLORS.primary} />}
        placeholderText="Enter Money..."
        name="money"
        control={control}
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
