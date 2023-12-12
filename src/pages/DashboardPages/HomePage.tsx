import React, { useEffect, useRef, useState, useTransition } from 'react';
import * as S from './DashboardPage.styles';
import { logout, RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';
import { Action, LiveboardEmbed } from '@thoughtspot/visual-embed-sdk/lib/src/react';
import axios from 'axios';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

/*
  Home Page : 
    - Filter Selection Component
    - Livebord with 4 tiles 
*/

const HomePage: React.FC = () => {
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  const { t } = useTranslation();
  /* 
    FetchData for Filters 
  */

  const LB_ONE = '1d8000d8-6225-4202-b56c-786fd73f95ad';

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
    // runtime filters to be included
  }, [filters]);

  return (
    <S.FullScreenCol ref={containerRef}>
      <PageTitle>{t('common.home')}</PageTitle>
      <LiveboardEmbed
        liveboardId={LB_ONE}
        frameParams={{ height: `${containerDimensions.height / 2}px` }}
        hiddenActions={[Action.SyncToOtherApps, Action.SyncToSheets, Action.ManagePipelines]}
        disabledActions={[
          Action.DownloadAsPdf,
          Action.Edit,
          Action.ExportTML,
          Action.Share,
          Action.RenameModalTitleDescription,
          Action.SpotIQAnalyze,
        ]}
        visibleVizs={[
          '07e621b5-51b9-40a1-bfee-ad99e2e66f32',
          '5de2b88e-c51e-41aa-8e28-98b58931c2a7',
          '0ff52fb5-1950-45a4-b2a0-27c1f5e888e2',
          'd13158bc-1597-4caa-8fdd-cd57f468831a',
        ]}
        // runtimeFilters= {[
        //   {
        //     columnName: "Account Name",
        //     operator: RuntimeFilterOp.EQ,
        //     values: ["Accredible"]
        //   }

        // ]}
        hideLiveboardHeader={true}
      />
    </S.FullScreenCol>
  );
};

export default HomePage;
