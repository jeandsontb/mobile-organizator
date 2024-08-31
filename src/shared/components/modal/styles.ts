import styled from 'styled-components/native';

import { theme } from '../../theme/theme';
import { Icon } from '../icon/icon';

export default {
  CustomModal: styled.View`
    position: absolute;
    bottom: 0;
    background-color: ${theme.colors.neutralTheme.white};
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 16px;
    height: 200px;
    elevation: 10;
  `,
  IconCloseModal: styled(Icon)`
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 99;
  `,
};
