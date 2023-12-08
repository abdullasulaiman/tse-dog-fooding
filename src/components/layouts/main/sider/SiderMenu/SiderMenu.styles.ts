import styled from 'styled-components';
import { FONT_SIZE } from '@app/styles/themes/constants';
import { BaseMenu } from '@app/components/common/BaseMenu/BaseMenu';

export const Menu = styled(BaseMenu)`
  background: transparent;
  border-right: 0;
  text-align: left;
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  background-color: #f6f8fa;
  color: var(--text-side-secondary-color);

  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${FONT_SIZE.xs};
    width: 100%;
  }

  span[role='img'],
  a,
  .ant-menu-item,
  .ant-menu-submenu {
    width: 100%;
    color: var(--text-sider-secondary-color);
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    color: blue;
  }

  .ant-menu-submenu-selected,
  .ant-menu-item-selected {
    .ant-menu-submenu-title,
    a {
      color: var(--text-sider-primary-color);
      width: 100%;
    }

    background-color: rgb(0, 0, 139, 0.1) !important;
  }

  .ant-menu-item-active,
  .ant-menu-submenu-active .ant-menu-submenu-title {
    background-color: transparent !important;
  }
`;
