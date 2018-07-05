<template>
  <div>
    <vuetable ref="vuetable"
      api-url="http://localhost:8585/service/invoices/all"
      :fields="fields"
      data-path="data.data"
      pagination-path="data"
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
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
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
      }
    }
  },
  methods: {
    formatMoney (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return 'Rp ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
