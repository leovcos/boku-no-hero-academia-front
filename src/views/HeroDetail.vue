<template>
    <div class="page-hero-detail">
        <nav class="page-hero-detail__nav">
          <a class="button is-primary" @click="back">Voltar</a>
        </nav>
        <HeroDetail :hero="hero"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import HeroDetail from '@/components/HeroDetail'

export default {
  components: {
    HeroDetail
  },
  data () {
    return {
      hero: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions(['requestHero']),
    back () {
      this.$router.go(-1)
    },
    async init () {
      this.hero = await this.requestHero({ id: this.$route.params.id })
      console.log(this.hero)
    }
  }
}
</script>
