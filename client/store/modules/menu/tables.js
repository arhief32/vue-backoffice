import lazyLoading from './lazyLoading'

export default {
  name: 'Tables',
  meta: {
    icon: 'fa-table',
    expanded: false
  },

  children: [
    {
      name: 'BasicTables',
      path: '/tables/basic',
      meta: {
        label: 'Basic Tables',
        link: 'tables/Basic.vue'
      },
      component: lazyLoading('tables/Basic')
    },
    {
      name: 'BasicTablesV2',
      path: '/tables/basicv2',
      meta: {
        label: 'Basic Tables V2',
        link: 'tables/BasicV2.vue'
      },
      component: lazyLoading('tables/BasicV2')
    },
    {
      name: 'TableExample',
      path: '/tables/table-example',
      meta: {
        label: 'Table Example',
        link: 'tables/TableExample.vue'
      },
      component: lazyLoading('tables/TableExample')
    }
  ]
}
