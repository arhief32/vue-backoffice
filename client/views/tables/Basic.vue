<template>
  <div>
    <card-modal ref="statusModal" transition="zoom">
      <div class="content has-text-centered">
        
      </div>
    </card-modal>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Table</h4>
          <button class="button is-warning" v-on:click="fetchPaginateInvoices(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
            prev
          </button>
          <button class="button is-warning" v-on:click="fetchPaginateInvoices(pagination.next_page_url)" :disabled="!pagination.prev_page_url">
            next
          </button>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SLA</th>
                <th>ID Paket</th>
                <th>ID Resi</th>
                <th>Status Paket</th>
                <th>Asal</th>
                <th>Tujuan</th>
                <th>Dikirim pada</th>
                <th>Pengirim</th>
                <th>Jumlah</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="invoice in invoices">
                <td>{{ invoice.id }}</td>
                <td>{{ invoice.sla }}</td>
                <td>{{ invoice.packet_detail.id }}</td>
                <td>{{ invoice.packet_detail.object_id }}</td>
                <td>{{ invoice.packet_detail.status }}</td>
                <td>{{ invoice.packet_detail.origin_detail.city_name }}</td>
                <td>{{ invoice.packet_detail.destination_detail.city_name }}</td>
                <td>{{ invoice.packet_detail.departure_expectation_time }}</td>
                <td>{{ invoice.packet_detail.sender_address_detail.contact_name }}</td>
                <td>{{ invoice.amount }}</td>
                <td>
                  <div v-if="invoice.status === 'unpaid'">
                    <button data-v-7b33bc41="" class="button is-danger" v-on:click="statusModal">Unpaid</button>
                  </div>
                  <div v-if="invoice.status === 'prepaid'">
                    <button data-v-7b33bc41="" class="button is-primary" v-on:click="statusModal">Prepaid</button>
                  </div>
                  <div v-if="invoice.status === 'paid'">
                    <button data-v-7b33bc41="" class="button is-success" v-on:click="statusModal">Paid</button>
                  </div>
                  <div v-if="invoice.status === 'canceled'">
                    <button data-v-7b33bc41="" class="button is-danger" v-on:click="statusModal">Canceled</button>
                  </div>
                  <div v-if="invoice.status === 'expired'">
                    <button data-v-7b33bc41="" class="button is-light" v-on:click="statusModal">Expired</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="button is-warning" v-on:click="fetchPaginateInvoices(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
            prev
          </button>
          Page {{ pagination.current_page }} of {{ pagination.last_page }}
          <button class="button is-warning" v-on:click="fetchPaginateInvoices(pagination.next_page_url)" :disabled="!pagination.prev_page_url">
            next
          </button>
        </article>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
.hero {
  margin-bottom: 35px;
}
</style>

<script>
import axios from 'axios'
import { CardModal } from 'vue-bulma-modal'

export default {
  data () {
    return {
      url: 'http://localhost:8585/service/invoices/all?page=12',
      pagination: [],
      invoices: [],
      options: [
        { text: 'Unpaid', value: 'unpaid' },
        { text: 'Prepaid', value: 'prepaid' },
        { text: 'Paid', value: 'paid' },
        { text: 'Canceled', value: 'canceled' },
        { text: 'Expired', value: 'expired' }
      ]
    }
  },

  mounted () {
    this.getInvoices()
  },

  components: {
    CardModal
  },

  methods: {
    getInvoices () {
      axios.get(this.url)
        .then(response => {
          this.invoices = response.data.data
          this.makePagination(response.data)
        })
    },
    makePagination (data) {
      let pagination = {
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url
      }
      this.pagination = pagination
    },
    fetchPaginateInvoices (url) {
      this.url = url
      this.getInvoices()
    },
    statusModal: function () {
      this.$refs.statusModal.active()
    }
  }
}
</script>
