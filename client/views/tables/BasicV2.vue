<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="title">Table with Vuetable</h4>
                    <div id="app-table">
                      <div class="ui container">
                        <vuetable-pagination ref="pagination"
                          :css="css.pagination"
                          @vuetable-pagination:change-page="onChangePage">
                        </vuetable-pagination>
                        <vuetable ref="vuetable"
                          api-url="http://localhost:8585/service/invoices/all"
                          :fields="fields"
                          :css="css"
                          data-path="data.data"
                          pagination-path="data"
                          @vuetable:pagination-data="onPaginationData"
                        ></vuetable>
                      </div>
                    </div>
                </article>
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<style>
#app-table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import * as Vuetable from 'vuetable-2'

export default {
  components: {
    'vuetable': Vuetable.Vuetable,
    'vuetable-pagination': Vuetable.VuetablePagination
  },
  data () {
    return {
      fields: [
        { name: 'id', title: 'ID', sortField: 'id' },
        { name: 'sla', title: 'SLA' },
        { name: 'id_packet', title: 'Packet ID' },
        { name: 'packet_detail.object_id', title: 'Object ID' },
        { name: 'packet_detail.status', title: 'Packet status' },
        { name: 'packet_detail.origin_detail.city_name', title: 'Origin' },
        { name: 'packet_detail.destination_detail.city_name', title: 'Destination' },
        { name: 'packet_detail.departure_expectation_time', title: 'Expectation time' },
        // { name: 'amount', title: 'Amount' },
        { name: 'amount', sortField: 'amount', titleClass: 'center aligned', dataClass: 'left aligned', callback: 'formatMoney' },
        { name: 'status', title: 'Invoice status' }
      ],
      css: {
        tableClass: 'table table-striped table-bordered',
        loadingClass: 'loading',
        ascendingIcon: 'glyphicon glyphicon-chevron-up',
        descendingIcon: 'glyphicon glyphicon-chevron-down',
        handleIcon: 'glyphicon glyphicon-menu-hamburger',
        pagination: {
          wrapperClass: 'pagination pull-right',
          activeClass: 'button is-warning',
          disabledClass: 'disabled',
          pageClass: 'button',
          linkClass: 'button',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
          }
        }
      }
    }
  },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    formatMoney (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
