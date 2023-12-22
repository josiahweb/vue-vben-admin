import { optionsListApi } from '@/api/demo/select';
import { VxeFormItemProps, VxeGridPropTypes } from '@/components/VxeTable';

export const vxeTableColumns: VxeGridPropTypes.Columns = [
  {
    title: '序号',
    type: 'seq',
    fixed: 'left',
    width: 50,
    align: 'center',
  },
  {
    title: '月份',
    minWidth: 40,
    field: 'name1',
    align: 'center',
    editRender: {
      name: 'AInput',
      placeholder: '请点击输入',
    },
  },
  {
    title: '收入',
    field: 'name',
    minWidth: 80,
    showOverflow: 'tooltip',
  },
  {
    title: '支出',
    field: 'name',
    minWidth: 80,
    showOverflow: 'tooltip',
  },
  {
    title: '结余',
    field: 'name',
    minWidth: 80,
    showOverflow: 'tooltip',
  },
  {
    title: '收支比',
    field: 'name',
    minWidth: 40,
    showOverflow: 'tooltip',
  },
  {
    minWidth: 120,
    title: '操作',
    align: 'center',
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const vxeTableFormSchema: VxeFormItemProps[] = [
  {
    field: 'field1',
    title: '年度',
    itemRender: {
      name: 'AApiSelect',
      props: {
        api: optionsListApi,
        resultField: 'list',
        labelField: 'name',
        valueField: 'id',
      },
    },
    span: 6,
  },
  {
    span: 18,
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
