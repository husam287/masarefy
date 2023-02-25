import React from 'react';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import {
  Box, Column, Row, Text,
} from 'native-base';
import COLORS from 'constants/Colors';

export default function MainInfoCard({
  totalMoney,
  todayExpenseAmount,
  missingDays,
}) {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.500', 'violet.700'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="4"
      rounded="xl"
    >
      <Text
        fontSize="xs"
        color={COLORS.light}
        textAlign="center"
      >
        Total Expenses
      </Text>

      <Row justifyContent="center" alignItems="center">
        <Text
          fontSize="xs"
          color={COLORS.light}
        >
          EGP
        </Text>
        <Text
          fontSize="xl"
          ml="1"
          color={COLORS.light}
        >
          {totalMoney}
        </Text>
      </Row>

      <Box
        p="4"
        rounded="xl"
        mt="5"
        bgColor={`${COLORS.dark}66`}
      >
        <Row alignItems="center" justifyContent="space-between">
          <Column alignItems="center">
            <Row alignItems="center">
              <Feather name="arrow-down" size={14} color={COLORS.danger} />
              <Text
                fontSize="xs"
                color={COLORS.light}
                ml="1"
              >
                Today Expenses
              </Text>
            </Row>
            <Text
              fontSize="md"
              color={COLORS.light}
            >
              {todayExpenseAmount}
            </Text>
          </Column>

          <Column alignItems="center">
            <Row alignItems="center">
              <FontAwesome5 name="exclamation" size={14} color={COLORS.danger} />
              <Text
                fontSize="xs"
                ml="1"
                color={COLORS.light}
              >
                Days Missing
              </Text>
            </Row>
            <Text
              fontSize="md"
              color={COLORS.light}
            >
              {missingDays}
            </Text>
          </Column>
        </Row>
      </Box>
    </Box>
  );
}
