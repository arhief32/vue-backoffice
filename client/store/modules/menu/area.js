import lazyLoading from './lazyLoading'

export default {
  name: 'Area',
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
      name: 'BasicTablesV3',
      path: '/tables/basicv3',
      meta: {
        label: 'Basic Tables V3',
        link: 'tables/BasicV3.vue'
      },
      component: lazyLoading('tables/BasicV3')
    }
  ]
}
