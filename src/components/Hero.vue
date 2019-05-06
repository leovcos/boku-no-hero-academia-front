<template>
    <div class="Hero">
        <div class="Hero__image" :style="{'background-image': `url(${hero.image})`}">
        </div>
        <div class="Hero__wrapper">
            <div class="Hero__name">
                {{hero.name}}
            </div>
            <router-link class="button is-primary" :to="{name: 'heroDetail', params: {id: hero.id}}">
                Ver
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>
