<template>
  <section class="section">
    <div class="card main-card">
      <h1 class="is-size-1">Bank Ledger</h1>
      <h2 class="is-size-2">Balance</h2>
      <h3 class="is-size-3">${{(balance/100).toFixed(2)}}</h3>
      <input type="number" v-model="amount">
      <button class="is-button is-success" @click="withdraw">Withdraw</button>
      <button @click="deposit">Deposit</button>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'authenticated',
  async fetch(){
    const balance = await this.$axios.$get('/transactions/balance/' + this.$store.state.auth.user.id)
    this.balance = balance.balance
  },
  data() {
    return {
      amount: 0,
      balance: 0,
    }
  },
  methods: {
    async deposit(){
      try {
        await this.$axios.$post('/transactions', {UserId: this.$store.state.auth.user.id, cent_amount: this.amount})
        this.$fetch()
      } catch (error) {
        this.setNotification({
          type: "is-danger",
          text: "An error has ocurred."
        })
        console.log(error)
      }
    },
    async withdraw(){
      try {
        if(this.amount > this.balance){
          this.setNotification({
            type: "is-danger",
            text: "Insufficient funds."
          })
          return
        }
        await this.$axios.$post('/transactions', {UserId: this.$store.state.auth.user.id, cent_amount: - this.amount})
        this.$fetch()
      } catch (error) {
          this.setNotification({
            type: "is-danger",
            text: "An error has ocurred."
          })
      }    
    }
  }
}
</script>

<style scoped>
.main-card{
  height: 100%;
  width: 100%;
  padding: 25px;
}
</style>
