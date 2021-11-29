<template>
  <section class="section">
    <div class="card main-card">
      <b-table class="dark-1"
        :data="transactions"
        :columns="columns"
        :sort-icon="'arrow-up'"
        :sort-icon-size="'is-small'"
        :mobile-cards="true"
        :paginated="true"
        :per-page="25">

        <template #empty>
            <div class="has-text-centered">No records</div>
        </template>
        
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'authenticated',
  async fetch(){
    this.transactions = await this.$axios.$get('/transactions/' + this.$store.state.auth.user.id)
  },
  data() {
    return {
      transactions: [],
      columns: [
        {
          field: 'cent_amount',
          label: 'Amount',
        },
        {
          field: 'createdAt',
          label: 'Date',
        },
      ]
    }
  },
}
</script>

<style scoped>
.main-card{
  height: 100%;
  width: 100%;
  padding: 25px;
}
</style>
