import lazyLoading from './lazyLoading'

export default {
  name: 'Corporate',
  meta: {
    icon: 'fa-building',
    expanded: false
  },

  children: [
    {
      name: 'ImportUserCashback',
      path: '/tripstore/import-user-cashback',
      meta: {
        label: 'Import User Cashback',
        link: 'tripstore/importusercashback.vue'
      },
      component: lazyLoading('tripstore/importusercashback')
    },
    {
      name: 'ImportOrderCorporate',
      path: '/tripstore/import-order-corporate',
      meta: {
        label: 'Import Order Corporate',
        link: 'tripstore/importordercorporate.vue'
      },
      component: lazyLoading('tripstore/importordercorporate')
    }
  ]
}
