<template>
    <div class="Hero">
        <div class="Hero__image" :style="{'background-image': `url(${hero.image})`}">
        </div>
        <div class="Hero__wrapper">
            <div class="Hero__name">
                {{hero.name}}
            </div>
            <a class="button is-primary">詳細</a>
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
