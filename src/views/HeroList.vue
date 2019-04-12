<template>
    <div>
        <h1>Lista de heróiss</h1>
        <pre>Page: {{page}}</pre>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted () {
    this.loadHeros({ page: 1 })
  },
  computed: {
    ...mapGetters({
      page: 'getHeroPage'
    })
  },
  methods: {
    ...mapActions(['loadHeros'])
  }
}
</script>
