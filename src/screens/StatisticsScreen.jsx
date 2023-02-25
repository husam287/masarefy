import ScreenWrapper from 'components/general/ScreenWrapper';
import COLORS from 'constants/Colors';
import METRICS from 'constants/Metrics';
import {
  Box, Column, Text, useTheme,
} from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';

function Statistics() {
  const chartWidth = METRICS.screenWidth - (METRICS.mainArroundSpacing * 2);
  const chartHeigth = 300;

  const { colors } = useTheme();

  const weeklyData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'],
    datasets: [
      {
        data: [
          Math.random() * 1000,
          Math.random() * 1000,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };

  const monthlyData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  const lineChartConfig = {
    backgroundColor: COLORS.light,
    backgroundGradientFrom: colors.light[100],
    backgroundGradientTo: colors.light[200],
    decimalPlaces: 0, // optional, defaults to 2dp
    color: () => `${COLORS.primary}`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: '6',
      strokeWidth: '1',
      stroke: COLORS.light,
    },
  };

  const barChartConfig = {
    backgroundColor: COLORS.light,
    backgroundGradientFrom: colors.light[100],
    backgroundGradientTo: colors.light[200],
    decimalPlaces: 0, // optional, defaults to 2dp
    color: () => `${COLORS.primary}`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
    propsForBackgroundLines: { style: { display: 'none' } },
  };

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* SEEKLY CHART */}
        <Column mx="1">
          <Text
            fontSize="xl"
            mb="2"
            color={COLORS.secondary}
          >
            Weekly Chart
          </Text>

          <Box shadow="4" rounded="xl" overflow="hidden">
            <LineChart
              data={weeklyData}
              width={chartWidth}
              height={chartHeigth}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={lineChartConfig}
              bezier
            />
          </Box>
        </Column>

        {/* MONTHLY CHART */}
        <Column mx="1" mb="5">
          <Text
            fontSize="xl"
            mb="2"
            mt="8"
            color={COLORS.secondary}
          >
            Monthly Chart
          </Text>

          <Box shadow="4" rounded="xl" overflow="hidden">
            <BarChart
              data={monthlyData}
              width={chartWidth}
              height={chartHeigth}
              chartConfig={barChartConfig}
              verticalLabelRotation={30}
            />
          </Box>
        </Column>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Statistics;
