import {
  Alert,
  Modal as ModalReactNative,
  ModalProps as ModalReactNativeProps,
} from 'react-native';

import { theme } from '../../theme/theme';
import { Button } from '../button';
import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import S from './styles';

interface ModalProps extends ModalReactNativeProps {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReactNative
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <S.CustomModal>
        <Text type={textTypes.PARAGRAPH_SEMIBOLD} color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text>{text}</Text>
        <Button title="OK" onPress={onCloseModal} />
        <S.IconCloseModal
          onPress={onCloseModal}
          name="cross"
          color={theme.colors.grayTheme.gray100}
          size={12}
        />
      </S.CustomModal>
    </ModalReactNative>
  );
};

export { Modal };
