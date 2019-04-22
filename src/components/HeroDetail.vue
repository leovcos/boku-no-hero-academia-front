<template>
    <div class="HeroDetail">
        <div class="HeroDetail__background">
            <div class="HeroDetail__image" :style="{'background-image': `url(${hero.image})`}">
            </div>
        </div>
        <div class="HeroDetail__wrapper">
            <div class="HeroDetail__name">
                {{hero.name}}
            </div>
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
