<template>
    <div class="Hero">
        <div class="Hero__image" :style="{'background-image': `url(${hero.image})`}">
        </div>
        <div class="Hero__wrapper">
            <div class="Hero__name">
                {{hero.name}} (Poder: {{hero.power}})
            </div>
            <router-link class="button is-primary" :to="{name: 'heroDetail', params: {id: hero.id}}">
                Ver
            </router-link>
            <a class="button is-primary" @click="increasePower({hero})">
                Aumentar poder
            </a>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  methods: {
      ...mapActions({
          increaseHeroPower: 'increaseHeroPower'
      }),
      async increasePower({hero}) {
          hero.power = (hero.power || 0) + 1
          await this.increaseHeroPower({hero})
      }
  }
}
</script>
