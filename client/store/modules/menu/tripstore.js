import lazyLoading from './lazyLoading'

export default {
  name: 'Tripstore',
  meta: {
    icon: 'fa-shopping-cart',
    expanded: false
  },

  children: [
    {
      name: 'Seller',
      path: '/tripstore/seller',
      meta: {
        label: 'Seller',
        link: 'tripstore/seller.vue'
      },
      component: lazyLoading('tripstore/seller')
    },
    {
      name: 'Buyer',
      path: '/tripstore/buyer',
      meta: {
        label: 'Buyer',
        link: 'tripstore/buyer.vue'
      },
      component: lazyLoading('tripstore/buyer')
    },
    {
      name: 'Store',
      path: '/tripstore/store',
      meta: {
        label: 'Store',
        link: 'tripstore/store.vue'
      },
      component: lazyLoading('tripstore/store')
    },
    {
      name: 'Invoice',
      path: '/tripstore/invoice',
      meta: {
        label: 'Invoice',
        link: 'tripstore/invoice.vue'
      },
      component: lazyLoading('tripstore/invoice')
    }
  ]
}
