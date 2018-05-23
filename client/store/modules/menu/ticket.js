import lazyLoading from './lazyLoading'

export default {
  name: 'Ticket',
  meta: {
    icon: 'fa-ticket',
    expanded: false
  },

  children: [
    {
      name: 'Flight',
      path: '/ticket/flight',
      meta: {
        label: 'Flight',
        link: 'ticket/flight.vue'
      },
      component: lazyLoading('ticket/flight')
    },
    {
      name: 'Hotel',
      path: '/ticket/hotel',
      meta: {
        label: 'Hotel',
        link: 'ticket/hotel.vue'
      },
      component: lazyLoading('ticket/hotel')
    }
  ]
}
