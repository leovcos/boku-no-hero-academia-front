<template>
  <div class="page page-admin">
    <nav class="page-hero-detail__nav">
      <a class="button is-primary" @click="$router.go(-1)">Voltar</a>
    </nav>
    <FormHero @submit="addHero"/>
    <div class="message is-danger" v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FormHero from '@/components/FormHero'

export default {
  components: {
    FormHero
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    ...mapActions({
      storeAddHero: 'addHero'
    }),
    async addHero (hero) {
      try {
        await this.storeAddHero({ hero })
        this.$router.push({ name: 'heroList' })
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
