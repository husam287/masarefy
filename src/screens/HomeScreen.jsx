import React from 'react';
import ScreenWrapper from 'components/general/ScreenWrapper';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import {
  Box, Column, Row, Text,
} from 'native-base';
import COLORS from 'constants/Colors';
import { ScrollView, TouchableOpacity } from 'react-native';
import ExpenseBox from 'components/home-components/ExpenseBox';

export default function HomeScreen() {
  const onSeeAllExpenses = () => {

  };

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              300,000,000
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
                    Total Expenses

                  </Text>
                </Row>
                <Text
                  fontSize="md"
                  color={COLORS.light}
                >
                  3000
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
                  2
                </Text>
              </Column>
            </Row>
          </Box>
        </Box>

        <Row mt="10" mb="3" alignItems="center" justifyContent="space-between">
          <Text
            fontSize="lg"
            color={COLORS.dark}
          >
            Recent Expenses
          </Text>

          <TouchableOpacity onPress={onSeeAllExpenses}>
            <Text
              fontSize="md"
              p="4"
              pr="0"
              color={COLORS.secondary}
            >
              See All
            </Text>
          </TouchableOpacity>
        </Row>

        <ExpenseBox
          expenseTitle="Lunch"
          money={340}
          date="Today"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
