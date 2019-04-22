<template>
    <div class="page-hero-list">
        <nav class="page-hero-list__nav">
          <a class="button is-primary is-warning" @click="doLogoff">Sair</a>
        </nav>

        <div class="page-hero-list__list">
          <Hero v-for="(hero, index) in page.content" :key="index" :hero="hero"/>
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
      page: 'getHeroPage'
    })
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
