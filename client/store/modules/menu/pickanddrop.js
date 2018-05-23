import lazyLoading from './lazyLoading'

export default {
  name: 'Pick and Drop',
  meta: {
    icon: 'fa-archive',
    expanded: false
  },

  children: [
    {
      name: 'SendPackage',
      path: '/pick-and-drop/send-package',
      meta: {
        label: 'Send Package',
        link: 'pickanddrop/sendpackage.vue'
      },
      component: lazyLoading('pickanddrop/sendpackage')
    },
    {
      name: 'Pickup',
      path: '/pick-and-drop/pickup',
      meta: {
        label: 'Pickup',
        link: 'pickanddrop/pickup.vue'
      },
      component: lazyLoading('pickanddrop/pickup')
    }
  ]
}
