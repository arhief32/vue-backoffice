import lazyLoading from './lazyLoading'

export default {
  name: 'Feeder',
  meta: {
    icon: 'fa-drivers-license',
    expanded: false
  },

  children: [
    {
      name: 'TaskList',
      path: '/feeder/task-list',
      meta: {
        label: 'Task List',
        link: 'feeder/tasklist.vue'
      },
      component: lazyLoading('feeder/tasklist')
    },
    {
      name: 'ApplicantList',
      path: '/feeder/applicant-list',
      meta: {
        label: 'Applicant List',
        link: 'feeder/applicantlist.vue'
      },
      component: lazyLoading('feeder/applicantlist')
    },
    {
      name: 'FeederList',
      path: '/feeder/feeder-list',
      meta: {
        label: 'Feeder list',
        link: 'feeder/feederlist.vue'
      },
      component: lazyLoading('feeder/feederlist')
    }
  ]
}
