import { forwardRef, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import S from './styles';
import { theme } from '../../theme/theme';
import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';

interface IInputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = forwardRef<TextInput, IInputProps>(({ margin, secureTextEntry, title, errorMessage, ...props }: IInputProps, ref) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurrentSecure(!currentSecure);
  };

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.grayTheme.gray100}
        >
          {title}
        </Text>
      )}

      <View>
        <S.Input
          secureTextEntry={currentSecure}
          hasSecureTextEntry={secureTextEntry}
          isError={!!errorMessage}
          {...props}
          ref={ref}
        />
        {secureTextEntry && (
          <S.IconEye
            name={currentSecure ? 'eye' : 'eye-blocked'}
            color={theme.colors.grayTheme.gray100}
            size={20}
            onPress={handleOnPressEye}
          />
        )}
      </View>

      {errorMessage && (
        <Text
          margin="0px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
});

export { Input };
