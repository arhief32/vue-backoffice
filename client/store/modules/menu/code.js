import lazyLoading from './lazyLoading'

export default {
  name: 'Code',
  meta: {
    icon: 'fa-barcode',
    expanded: false
  },

  children: [
    {
      name: 'ReferralCode',
      path: '/code/referral-code',
      meta: {
        label: 'Referral Code',
        link: 'code/referralcode.vue'
      },
      component: lazyLoading('code/referralcode')
    },
    {
      name: 'RedeemCode',
      path: '/code/redeem-code',
      meta: {
        label: 'Redeem Code',
        link: 'code/redeemcode.vue'
      },
      component: lazyLoading('code/redeemcode')
    }
  ]
}
