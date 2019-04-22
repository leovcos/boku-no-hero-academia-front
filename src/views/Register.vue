<template>
  <div class="page page-register">
    <div class="page-register__logo">
      <img src="@/assets/logo_boku_academia.png"/>
    </div>
    <FormRegister/>
    <router-link to="/" class="button is-primary">Entrar</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import FormRegister from '@/components/FormRegister.vue'

export default {
  name: 'home',
  components: {
    FormRegister
  }
}
</script>
