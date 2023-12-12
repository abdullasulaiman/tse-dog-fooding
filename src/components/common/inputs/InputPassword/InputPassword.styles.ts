import styled from 'styled-components';
import { BaseInput } from '../BaseInput/BaseInput';

export const InputPassword = styled(BaseInput.Password)`
  color: var(--primary1-color) !important;
  .ant-input-password-icon.anticon {
    color: var(--primary1-color) !important;
    &:hover {
      color: black;
    }
  }
`;
