import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const StatsCard = styled.View`
  height: 102px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const StatsButton = styled.TouchableOpacity`
  position: absolute;

  top: 10px;
  right: 10px;
`;

export const StatsIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const StatsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const StatsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Meals = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const MealsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
