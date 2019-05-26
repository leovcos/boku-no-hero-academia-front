<template>
    <div class="page-hero-list">
        <nav class="page-hero-list__nav">
          <a class="button is-primary is-warning" @click="doLogoff">Sair</a>
          <router-link v-if="isAdmin" class="button is-primary" :to="{name: 'admin'}">Admin</router-link>
        </nav>

        <div class="page-hero-list__list">
          <Hero v-for="(hero, index) in contentOrderedByPower" :key="index" :hero="hero"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Hero from '@/components/Hero'

export default {
  components: {
    Hero
  },
  mounted () {
    this.loadHeros({ page: 1 })
  },
  computed: {
    ...mapGetters({
      page: 'getHeroPage',
      isAdmin: 'userHasAdminAuthority'
    }),
    contentOrderedByPower() {
      let content = (this.page || {}).content || [] 
      content.sort((a,b) => a.power > b.power ? -1 : a.power === b.power ? 0 : 1)
      return content
    }
  },
  methods: {
    ...mapActions(['loadHeros', 'logoff']),
    async doLogoff () {
      await this.logoff()
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
