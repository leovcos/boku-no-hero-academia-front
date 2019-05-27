<template>
  <FormUsernamePassword @submit="authUser" :error="state.errorMessage"/>
</template>

<script>
import FormUsernamePassword from './FormUsernamePassword'
import { mapActions } from 'vuex'

export default {
  components: {
    FormUsernamePassword
  },
  data () {
    return {
      state: {
        errorMessage: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async authUser (model) {
      this.state.errorMessage = false

      try {
        await this.login({ credentials: model })
        this.$router.push({ name: 'heroList' })
      } catch (error) {
        if (error.response) {
          let i18n = {
            Unauthorized: 'Login ou senha errado'
          }
          this.state.errorMessage = i18n[error.response.data.message] || error.response.data.message
          return
        }
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
