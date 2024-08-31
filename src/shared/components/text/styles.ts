import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  fontSize: string;
  customMargin?: string;
  fontFamily:
    | 'Poppins-Bold'
    | 'Poppins-Light'
    | 'Poppins-Regular'
    | 'Poppins-Medium'
    | 'Poppins-SemiBold';
}

export default {
  TextCustom: styled.Text<TextProps>`
    padding-top: 3px;
    font-size: ${({ fontSize }: TextProps) => fontSize};
    font-family: ${({ fontFamily }: TextProps) => fontFamily};
    ${({ color }: TextProps) => (color ? `color: ${color};` : '')}
    ${({ customMargin }: TextProps) => (customMargin ? `margin: ${customMargin};` : '')}
  `,
};
