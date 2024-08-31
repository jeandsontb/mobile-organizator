import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import S from './styles';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({ color, type, margin, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_SEMIBOLD:
      case textTypes.BUTTON_MEDIUM:
      case textTypes.BUTTON_REGULAR:
      case textTypes.BUTTON_LIGHT:
        return '18px';

      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_SEMIBOLD:
      case textTypes.TITLE_MEDIUM:
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_LIGHT:
        return '24px';

      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_SEMIBOLD:
      case textTypes.SUB_TITLE_MEDIUM:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.SUB_TITLE_LIGHT:
        return '20px';

      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
      case textTypes.PARAGRAPH_SMALL_MEDIUM:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
        return '10px';

      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SEMIBOLD:
      case textTypes.PARAGRAPH_MEDIUM:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_LIGHT:
      default:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.BUTTON_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';

      case textTypes.TITLE_SEMIBOLD:
      case textTypes.SUB_TITLE_SEMIBOLD:
      case textTypes.BUTTON_SEMIBOLD:
      case textTypes.PARAGRAPH_SEMIBOLD:
      case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
        return 'Poppins-SemiBold';

      case textTypes.TITLE_MEDIUM:
      case textTypes.SUB_TITLE_MEDIUM:
      case textTypes.BUTTON_MEDIUM:
      case textTypes.PARAGRAPH_MEDIUM:
      case textTypes.PARAGRAPH_SMALL_MEDIUM:
        return 'Poppins-Medium';

      case textTypes.TITLE_LIGHT:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.BUTTON_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
        return 'Poppins-Light';

      case textTypes.TITLE_REGULAR:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.BUTTON_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
        return 'Poppins-Regular';

      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return (
    <S.TextCustom
      {...props}
      customMargin={margin}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
    />
  );
};
export { Text };
