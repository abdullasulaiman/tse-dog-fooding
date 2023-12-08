import styled from 'styled-components';
import { LAYOUT, media } from '@app/styles/themes/constants';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const RightSideCol = styled(BaseCol)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  background-color: var(--sider-background-color);
  overflow-y: auto;
`;

export const LeftSideCol = styled(BaseCol)`
  width: 100%;
  height: 100%;
  back @media only screen and ${media.xl} {
    // padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    // height: calc(100vh - ${LAYOUT.desktop.headerHeight});
    // overflow: auto;
  }
`;

export const FullScreenCol = styled.div`
  width: 100%;
  height: 100%;
  display: 'flex';
  margin: 'auto';
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;

  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 15px;
  background: black;
  min-height: 300px;
  overflow-y: auto;
`;

export const Item = styled.div`
  background: red;
  height: 150px;
  flex-shrink: 0;
`;

export const Dropdown = styled.input`
  padding: 0.5rem;
`;

export const Label = styled.label`
  color: white;
  margin-right: 2em;
`;

export const Select = styled.select`
  color: white;
  border-radius: 5px;
  background-color: rgb(15, 15, 15, 0.1);
  margin: 0.5rem;
  padding: 0.5rem;
`;
export const Options = styled.option`
  background-color: white;
  color: red !important;
`;

export const FilterComponent = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
`;
