import lazyLoading from './lazyLoading'

export default {
  name: 'Area',
  meta: {
    icon: 'fa-map-marker',
    expanded: false
  },

  children: [
    {
      name: 'ListArea',
      path: '/area/list-area',
      meta: {
        label: 'List Area',
        link: 'area/listarea.vue'
      },
      component: lazyLoading('area/listarea')
    },
    {
      name: 'Route',
      path: '/area/route',
      meta: {
        label: 'Route',
        link: 'area/route.vue'
      },
      component: lazyLoading('area/route')
    },
    {
      name: 'SLAData',
      path: '/area/sla-data',
      meta: {
        label: 'SLA Data',
        link: 'area/sladata.vue'
      },
      component: lazyLoading('area/sladata')
    }
  ]
}
