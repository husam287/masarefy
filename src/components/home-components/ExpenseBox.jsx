import React from 'react';
import {
  Box, Column, Row, Text,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import COLORS from 'constants/Colors';

export default function ExpenseBox({
  date,
  money,
  expenseTitle,
}) {
  return (
    <Box mb="5" mx="1" shadow="2" bgColor={COLORS.light} rounded="2xl" p="3">
      <Row alignItems="center" justifyContent="space-between">
        <Row alignItems="center">
          <Box mr="3" p="4" rounded="xl" bgColor={`${COLORS.danger}22`} justifyContent="center" alignItems="center">
            <Feather name="arrow-down-left" size={24} color={COLORS.danger} />
          </Box>

          <Column>
            <Text>{expenseTitle}</Text>
            <Text fontSize="xs" color="gray.500">{date}</Text>
          </Column>
        </Row>

        <Column>
          <Text>{money}</Text>
          <Text fontSize="xs" color="gray.500">EGP</Text>
        </Column>
      </Row>
    </Box>
  );
}
