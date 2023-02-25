import React, { useCallback, useState } from 'react';
import ScreenWrapper from 'components/general/ScreenWrapper';
import { Row, Text } from 'native-base';
import COLORS from 'constants/Colors';
import { FlatList, TouchableOpacity, View } from 'react-native';
import ExpenseBox from 'components/home-components/ExpenseBox';
import MainInfoCard from 'components/home-components/MainInfoCard';
import { useFocusEffect } from '@react-navigation/native';
import ExpenseService from 'services/ExpenseService';
import moment from 'moment';
import EmptyComponent from 'components/general/EmptyComponent';

export default function HomeScreen() {
  const onSeeAllExpenses = () => {};

  const [expences, setExpences] = useState([]);
  useFocusEffect(
    useCallback(() => {
      ExpenseService.getAll().then((res) => {
        setExpences(res);
      });
    }, []),
  );

  const [totalMoney, setTotalMoney] = useState(0);
  useFocusEffect(
    useCallback(() => {
      ExpenseService.getmoneyAmount().then((res) => {
        setTotalMoney(res?.summationOfMoney);
      });
    }, []),
  );

  const MainHeaderMarkup = (
    <View>
      <MainInfoCard
        totalMoney={totalMoney || 0}
        todayExpenseAmount={totalMoney || 0}
        missingDays={4}
      />

      <Row mt="10" mb="3" alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" color={COLORS.dark}>
          Recent Expenses
        </Text>

        <TouchableOpacity onPress={onSeeAllExpenses}>
          <Text fontSize="md" p="4" pr="0" color={COLORS.secondary}>
            See All
          </Text>
        </TouchableOpacity>
      </Row>
    </View>
  );

  return (
    <ScreenWrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={MainHeaderMarkup}
        data={expences}
        keyExtractor={(item) => `${item?.id}`}
        renderItem={({ item }) => (
          <ExpenseBox
            expenseTitle={item?.reason}
            money={item?.money}
            date={moment(item?.date).format('YYYY-MM-DD')}
          />
        )}
        ListEmptyComponent={<EmptyComponent text="No expenses yet" />}
      />
    </ScreenWrapper>
  );
}
