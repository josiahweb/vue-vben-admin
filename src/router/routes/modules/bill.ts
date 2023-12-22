import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';
import { LAYOUT } from '@/router/constant';

const about: AppRouteModule = {
  path: '/bill',
  name: 'Bill',
  component: LAYOUT,
  redirect: '/bill/overview',
  meta: {
    hideChildrenInMenu: false,
    icon: 'ant-design:money-collect-outlined',
    title: t('routes.dashboard.bill'),
    orderNo: 19,
  },
  children: [
    {
      path: 'overview',
      name: 'BillOverView',
      component: () => import('@/views/bill/overview/index.vue'),
      meta: {
        title: t('routes.dashboard.billOverview'),
        icon: 'ant-design:unordered-list-outlined',
        hideMenu: false,
      },
    },
    {
      path: 'income-edit',
      name: 'billIncomeEdit',
      component: () => import('@/views/bill/income-edit/index.vue'),
      meta: {
        title: t('routes.dashboard.incomeEdit'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
    {
      path: 'disbursement-edit',
      name: 'BillDisbursement',
      component: () => import('@/views/bill/disbursement-edit/index.vue'),
      meta: {
        title: t('routes.dashboard.disbursement'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
