<template>
    <div>
        <card-modal ref="statusPacketModal" @ok="ok" @cancel="closeModal" transition="zoom">
          <div class="content has-text-centered">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Packet ID</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" v-model="packet.id" disabled>
                </p>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Packet status</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <span class="select">
                    <select class="select" v-model="packet.status">
                      <option value="canceled">Canceled</option>
                      <option value="pending">Pending</option>
                      <option value="pick up by feeder">Picked up by feeder</option>
                      <option value="on the way to traveler">On the way to traveler</option>
                      <option value="pick up by traveler">Picked up by traveler</option>
                      <option value="traveler arrived">Traveller Arrived</option>
                      <option value="deliver by feeder">Deliver by feeder</option>
                      <option value="completed">Completed</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </card-modal>
        <card-modal ref="statusInvoiceModal" @cancel="closeModal" transition="zoom">
          <div class="content has-text-centered">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Invoice ID</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" v-model="invoice.id" disabled>
                </p>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Invoice status</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <span class="select">
                    <select class="select" v-model="invoice.status">
                      <option value="unpaid">unpaid</option>
                      <option value="prepaid">prepaid</option>
                      <option value="paid">paid</option>
                      <option value="canceled">canceled</option>
                      <option value="expired">expired</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </card-modal>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                  <h4 class="title">Table with Vuetable scrapping</h4>
                    <div id="app-table">
                      <div class="ui container">
                        <filter-bar></filter-bar>
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
import FilterBar from './FilterBar'

export default {
  components: {
    'vuetable': Vuetable.Vuetable,
    'vuetable-pagination': Vuetable.VuetablePagination,
    'card-modal': CardModal,
    'filter-bar': FilterBar
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
      packet: {
        id: '',
        status: ''
      },
      invoice: {
        id: '',
        status: ''
      },
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
    statusPacketModal: function (action, data, index) {
      console.log('the value is: ' + action, data.packet_detail, index)
      this.packet.id = data.packet_detail.id
      this.packet.status = data.packet_detail.status
      this.$refs.statusPacketModal.active()
    },
    statusInvoiceModal: function (action, data, index) {
      console.log('the value is: ' + action, data.status, index)
      this.invoice.id = data.id
      this.invoice.status = data.status
      this.$refs.statusInvoiceModal.active()
    },
    closeModal () {
      this.$refs.statusPacketModal.deactive()
      this.$refs.statusInvoiceModal.deactive()
    },
    ok () {
      console.log('sokil gob')
    }
  },
  events: {
  }
}
</script>
