<template>
    <div class="HeroDetail">
        <div class="HeroDetail__background">
            <div class="HeroDetail__image">
                <img :src="hero.image"/>
            </div>
        </div>
        <div class="HeroDetail__wrapper">
            <div class="HeroDetail__name">
                {{hero.name}} (Poder: {{hero.power}})
            </div>
            <div class="HeroDetail__birthday">
                {{hero.birthday | date}}
            </div>
            <div class="HeroDetail__quirk">
                {{hero.quirk | quirkName}}
            </div>
            <a class="button is-danger" @click="deleteHero">
                Excluir
            </a>
            <div class="message is-danger" v-if="error">
              {{error}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  filters: {
    date (val) {
      if (!val) {
        return ''
      }
      val = new Date(val)
      return `${val.getDate()}/${val.getMonth() + 1}/${val.getFullYear()}`
    },
    quirkName (quirk) {
      if (!quirk) {
        return ''
      }
      return quirk.name
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    ...mapActions({
      storeDeleteHero: 'deleteHero'
    }),
    async deleteHero () {
      try {
        await this.storeDeleteHero({ id: this.$route.params.id })
        this.$router.push({ name: 'heroList' })
      } catch (error) {
        this.error = error.message
        this.$router.push({ name: 'forbidden' })
      }
    }
  }
}
</script>
