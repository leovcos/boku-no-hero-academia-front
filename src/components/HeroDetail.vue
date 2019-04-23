<template>
    <div class="HeroDetail">
        <div class="HeroDetail__background">
            <div class="HeroDetail__image">
                <img :src="hero.image"/>
            </div>
        </div>
        <div class="HeroDetail__wrapper">
            <div class="HeroDetail__name">
                {{hero.name}}
            </div>
            <div class="HeroDetail__birthday">
                {{hero.birthday | date}}
            </div>
            <div class="HeroDetail__quirk">
                {{hero.quirk.name}}
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
  },
  filters: {
    date (val) {
      if (!val) {
        return ''
      }
      val = new Date(val)
      return `${val.getDate()}/${val.getMonth() + 1}/${val.getFullYear()}`
    }
  }
}
</script>
