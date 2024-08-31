import { ActivityIndicator, TouchableOpacityProps } from 'react-native';


import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import { ButtomDisable, ButtonGradient, ButtonSecondary, StyleGradientButton } from './styles';
import { theme } from '../../theme/theme';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  fontSmal?: boolean;
  onPress?: () => void;
}

const Button = ({ title, type, margin, loading, disabled, onPress, fontSmal, ...props }: IButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={fontSmal ? textTypes.PARAGRAPH_REGULAR : textTypes.BUTTON_SEMIBOLD} color={color}>
        {title}
      </Text>

      {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return (
      <ButtomDisable {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtomDisable>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonGradient {...props} margin={margin} onPress={handleOnPress}>
          <StyleGradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </StyleGradientButton>
        </ButtonGradient>
      );
  }
};

export { Button };
