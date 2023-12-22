import { VxeFormItemProps, VxeGridPropTypes } from '@/components/VxeTable';

export const vxeTableColumns: VxeGridPropTypes.Columns = [
  {
    title: '序号',
    type: 'seq',
    fixed: 'left',
    width: '50',
    align: 'center',
  },
  {
    title: '交易时间',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '分类',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '交易对方',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '商品信息',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '金额',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '支付方式',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '支付状态',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '交易单号',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '商户单号',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '交易类型',
    field: 'name',
    minWidth: 150,
    showOverflow: 'tooltip',
  },
  {
    title: '月份',
    minWidth: 120,
    field: 'name1',
    align: 'center',
    editRender: {
      name: 'AInput',
      placeholder: '请点击输入',
    },
  },

  {
    minWidth: 60,
    title: '操作',
    align: 'center',
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const vxeTableFormSchema: VxeFormItemProps[] = [
  {
    span: 24,
    align: 'right',
    className: '!pr-0',
    itemRender: {
      name: 'AButtonGroup',
      children: [
        {
          props: { type: 'primary', content: '查询', htmlType: 'submit' },
          attrs: { class: 'mr-2' },
        },
        { props: { type: 'default', htmlType: 'reset', content: '重置' } },
      ],
    },
  },
];
