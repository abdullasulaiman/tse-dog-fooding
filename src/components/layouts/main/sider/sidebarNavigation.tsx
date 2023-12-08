import React from 'react';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.home',
    key: 'home',
    // TODO use path variable
    url: '/dfg/dashboard',
  },
  {
    title: 'common.liveboard',
    key: 'liveboard',
    url: '/dfg/liveboard',
  },
];
