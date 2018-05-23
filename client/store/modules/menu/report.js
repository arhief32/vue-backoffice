import lazyLoading from './lazyLoading'

export default {
  name: 'Report',
  meta: {
    icon: 'fa-copy',
    expanded: false
  },

  children: [
    {
      name: 'SalesReport',
      path: '/report/sales-report',
      meta: {
        label: 'Sales Report',
        link: 'report/sales-report.vue'
      },
      component: lazyLoading('report/sales-report')
    },
    {
      name: 'Revenue',
      path: '/report/revenue',
      meta: {
        label: 'Revenue',
        link: 'report/revenue.vue'
      },
      component: lazyLoading('report/revenue')
    }
  ]
}
