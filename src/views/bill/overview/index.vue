<template>
  <PageWrapper
    title="年度账单概览"
    :content="`${day} 年度，总收入：${income}，总支出：${disbursement}，结余：${jy}`"
    contentFullHeight
    fixedHeight
  >
    <VxeBasicTable ref="tableRef" v-bind="gridOptions">
      <template #action="{ row }">
        <TableAction outside :actions="createActions(row)" />
      </template>
    </VxeBasicTable>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { demoListApi } from '@/api/demo/table';
  import { PageWrapper } from '@/components/Page';
  import { ActionItem, TableAction } from '@/components/Table';
  import { BasicTableProps, VxeBasicTable, VxeGridInstance } from '@/components/VxeTable';
  import { useMessage } from '@/hooks/web/useMessage';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { vxeTableColumns, vxeTableFormSchema } from './tableData';

  const router = useRouter();

  const day = '2023';
  const income = 100;
  const disbursement = 80;
  const jy = 20;

  const { createMessage } = useMessage();

  const tableRef = ref<VxeGridInstance>();

  const gridOptions = reactive<BasicTableProps>({
    id: 'VxeTable',
    keepSource: true,
    showFooter: true,
    editConfig: { trigger: 'click', mode: 'cell', showStatus: true },
    columns: vxeTableColumns,
    toolbarConfig: {
      buttons: [
        {
          content: '新增',
          buttonRender: {
            name: 'AButton',
            props: {
              type: 'primary',
              preIcon: 'mdi:page-next-outline',
            },
            events: {
              click: () => {
                tableRef.value?.insert({ name: '新增的' });
                createMessage.success('新增成功');
              },
            },
          },
        },
      ],
    },
    formConfig: {
      enabled: true,
      items: vxeTableFormSchema,
    },
    height: 'auto',
    proxyConfig: {
      ajax: {
        query: async ({ page, form }) => {
          return demoListApi({
            page: page.currentPage,
            pageSize: page.pageSize,
            ...form,
          });
        },
        queryAll: async ({ form }) => {
          return await demoListApi(form);
        },
      },
    },
    footerMethod({ columns, data }) {
      console.log('data =>', data);
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值';
          }
          if (['age', 'rate'].includes(column.field)) {
            // return sumNum(data, column.field);
            return 1;
          }
          return '';
        }),
      ];
    },
  });

  // 操作按钮（权限控制）
  const createActions = (record) => {
    const actions: ActionItem[] = [
      {
        label: '收入编辑',
        onClick: () => {
          router.push({ path: 'income-edit' });
        },
      },
      {
        label: '支出编辑',
        onClick: () => {
          router.push({ path: 'disbursement-edit' });
        },
      },
      {
        label: '删除',
        color: 'error',
        popConfirm: {
          title: '是否确认删除',
          confirm: () => {
            tableRef.value?.remove(record);
          },
        },
      },
    ];

    return actions;
  };
</script>
