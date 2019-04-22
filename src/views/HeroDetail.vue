<template>
    <div class="page-hero-detail">
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
    async init () {
      this.hero = await this.requestHero({ id: this.$route.params.id })
      console.log(this.hero)
    }
  }
}
</script>
