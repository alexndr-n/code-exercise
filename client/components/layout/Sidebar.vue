<template>
    <section class="sidebar-layout">
            <b-sidebar
            position="static"
            :mobile="mobile"
            :expand-on-hover="expandOnHover"
            :reduce="reduce"
            :delay="expandWithDelay ? 500 : null"
            type="is-light"
            open
        >
            <div class="logo">
                Bank Ledger
            </div>
            <b-icon icon="menu" class="open-sidebar-icon" custom-class="blue"></b-icon>
            <div class="pr-5 sidebar-menu">
                <b-menu class="is-custom-mobile">
                    <b-menu-list>
                        <b-menu-item icon="chart-box" label="Home" @click="$router.push('/')"></b-menu-item>
                        <b-menu-item icon="briefcase-check" label="Transactions" @click="$router.push('/transactions')"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </div>
        </b-sidebar>
    </section>
</template>

<script>
export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false
    };
  },
  methods: {
      redirect(path){
          this.$router.push(path)
      }
  }
};
</script>

<style lang="scss">
@import '~assets/css/variables';

.b-sidebar, .sidebar-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh);
  padding: 0;
  width: 100% !important;
  position: relative;
}

.b-sidebar{
    .open-sidebar-icon{
        position: absolute;
        top: 32px;
        right: -20px;
        width: 50px;
        height: 50px;
        background: white;
        border-radius: 50%;    
    }
    .sidebar-menu{
        padding-bottom: calc(40px + 6vh);
    }
    .logo{
        position: absolute;
        width: 180px;
        top: 28px;
        left: 38px;
    }
}

.blue{
    color: $twentyx_text;
}
</style>