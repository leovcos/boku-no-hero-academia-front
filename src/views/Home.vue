<template>
  <div class="page page-home">
    <div class="page-home__logo">
      <img src="@/assets/logo_boku_academia.png"/>
    </div>
    <FormLogin/>
    <router-link to="/cadastrar" class="button is-primary page-home-register">Criar conta</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/FormLogin.vue'

export default {
  name: 'home',
  components: {
    FormLogin
  }
}
</script>
