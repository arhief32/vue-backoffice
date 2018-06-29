<template>
    <div>
        <card-modal ref="statusPacketModal" transition="zoom">
          <div class="content has-text-centered">

          </div>
        </card-modal>
        <card-modal ref="statusInvoiceModal" transition="zoom">
          <div class="content has-text-centered">

          </div>
        </card-modal>
        <button class="button is-success is-fullwidth" v-on:click="statusInvoiceModal">Paid</button>
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
                        >
                          <template slot="packet_detail.status" slot-scope="props">
                            <div v-if="props.rowData.packet_detail.status === 'pending'">
                              <button class="button is-danger is-fullwidth" @click="statusPacketModal('edit-status-packet', props.rowData, props.rowIndex)">Pending</button>
                            </div>
                            <div v-else-if="props.rowData.packet_detail.status === 'completed'">
                              <button class="button is-success is-fullwidth" @click="statusPacketModal('edit-status-packet', props.rowData, props.rowIndex)">Completed</button>
                            </div>
                            <div v-else-if="props.rowData.packet_detail.status === 'canceled'">
                              <button class="button is-light is-fullwidth" @click="statusPacketModal('edit-status-packet', props.rowData, props.rowIndex)">Canceled</button>
                            </div>
                            <div v-else>
                              <button class="button is-warning is-fullwidth" @click="statusPacketModal('edit-status-packet', props.rowData, props.rowIndex)"> {{ props.rowData.packet_detail.status.charAt(0).toUpperCase() + props.rowData.packet_detail.status.slice(1).toLowerCase() }} </button>
                            </div>
                          </template>

                          <template slot="status" slot-scope="props">
                            <div v-if="props.rowData.status === 'unpaid'">
                              <button class="button is-danger is-fullwidth" @click="statusInvoiceModal('edit-status-invoice', props.rowData, props.rowIndex)">Unpaid</button>
                            </div>
                            <div v-if="props.rowData.status === 'prepaid'">
                              <button class="button is-primary is-fullwidth" @click="statusInvoiceModal('edit-status-invoice', props.rowData, props.rowIndex)">Prepaid</button>
                            </div>
                            <div v-if="props.rowData.status === 'paid'">
                              <button class="button is-success is-fullwidth" @click="statusInvoiceModal('edit-status-invoice', props.rowData, props.rowIndex)">Paid</button>
                            </div>
                            <div v-if="props.rowData.status === 'canceled'">
                              <button class="button is-danger is-fullwidth" @click="statusInvoiceModal('edit-status-invoice', props.rowData, props.rowIndex)">Canceled</button>
                            </div>
                            <div v-if="props.rowData.status === 'expired'">
                              <button class="button is-light is-fullwidth" @click="statusInvoiceModal('edit-status-invoice', props.rowData, props.rowIndex)">Expired</button>
                            </div>
                          </template>
                        </vuetable>
                      </div>
                    </div>
                </article>
            </div>
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
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    'vuetable': Vuetable.Vuetable,
    'vuetable-pagination': Vuetable.VuetablePagination,
    CardModal
  },
  props: {
    rowData: {
      type: Object
    },
    rowIndex: {
      type: Number
    }
  },
  data () {
    return {
      fields: [
        { name: 'id', title: 'ID', sortField: 'id' },
        { name: 'sla', title: 'SLA' },
        { name: 'id_packet', title: 'Packet ID' },
        { name: 'packet_detail.object_id', title: 'Object ID' },
        { name: '__slot:packet_detail.status', title: 'Packet status' },
        { name: 'packet_detail.origin_detail.city_name', title: 'Origin' },
        { name: 'packet_detail.destination_detail.city_name', title: 'Destination' },
        { name: 'packet_detail.departure_expectation_time', title: 'Expectation time' },
        { name: 'amount', title: 'Amount', sortField: 'amount', dataClass: 'has-text-right', callback: 'formatMoney' },
        { name: '__slot:status', title: 'Invoice status' }
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
      return 'Rp ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    packetStatus (value) {
      if (value === 'pending') {
        return '<button class="button is-danger is-fullwidth" v-on:click="statusPacketModal">Pending</button>'
      } else if (value === 'completed') {
        return '<button class="button is-success is-fullwidth" v-on:click="statusPacketModal">Completed</button>'
      } else if (value === 'canceled') {
        return '<button class="button is-light is-fullwidth" v-on:click="statusPacketModal">Canceled</button>'
      } else {
        return '<button class="button is-warning is-fullwidth" v-on:click="statusPacketModal">' + value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() + '</button>'
      }
    },
    statusPacketModal: function (action, data, index) {
      console.log('the value is: ' + action, data.packet_detail.status, index)
      this.$refs.statusPacketModal.active()
    },
    statusInvoiceModal: function (action, data, index) {
      console.log('the value is: ' + action, data.status, index)
      this.$refs.statusInvoiceModal.active()
    }
  },
  events: {
  }
}
</script>
