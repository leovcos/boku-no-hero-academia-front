<template>
  <form class="FormLogin" @submit.prevent="authUser">
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Usuário" v-model="model.username">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" type="password" placeholder="Senha" v-model="model.password">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button type="submit" class="button is-primary">ログイン</button>
      </p>
    </div>
    <div class="message" v-if="state.errorMessage">{{state.errorMessage}}</div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      state: {
        errorMessage: false
      },
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async authUser () {
      this.state.errorMessage = false

      try {
        await this.login({ credentials: this.model })
        this.$router.push({ name: 'heroList' })
      } catch (error) {
        if (error.data) {
          this.state.errorMessage = error.data.message
          return
        }
        this.state.errorMessage = error.message
      }
    }
  }
}
</script>
