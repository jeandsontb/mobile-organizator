import styled from "styled-components/native";
import { theme } from "../../theme/theme";

type ContainerDetailsContactProps = {
    $isOpen: boolean;
}

export default {
  BoxContainer: styled.View`
      width: 100%;
      height: auto;
  `,
  ContainerListContact: styled.View`
      width: 100%;
      height: 48px;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.grayTheme.gray80};
      margin-bottom: 6px;
      flex-direction: row;
  `,
  ContainerDetailsContact: styled.View<ContainerDetailsContactProps>`
    height: ${({ $isOpen }: {$isOpen: boolean}) => ($isOpen ? 'auto' : '0px')};
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${theme.colors.neutralTheme.white};
    border-radius: 4px;
  `,
  BoxButtons: styled.View<ContainerDetailsContactProps>`
    display: ${({ $isOpen }: {$isOpen: boolean}) => ($isOpen ? 'flex' : 'none')};
    flex-direction: row;
    width: 100%;
    height: fit-content;
    justify-content: flex-end;
    gap: 10px;
  `,
  BoxButtonEdit: styled.View`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: ${theme.colors.grayTheme.gray100};
  `,
  BoxButtonRemove: styled.View`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: ${theme.colors.redTheme.red80};
  `
}