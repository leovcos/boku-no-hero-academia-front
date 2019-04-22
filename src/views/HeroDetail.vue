<template>
    <div class="page-hero-detail">
        <pre>{{hero}}</pre>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Hero from '@/components/Hero'

export default {
  components: {
    Hero
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
