import styled from 'styled-components/native';

interface DisplayFlexColumnProps {
  customMargin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayFlexColumnProps>`
  width: 100%;
  margin: ${({ customMargin }: DisplayFlexColumnProps) => (customMargin ? customMargin : '0px')};
`;


