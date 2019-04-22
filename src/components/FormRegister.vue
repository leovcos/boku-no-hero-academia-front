<template>
  <FormUsernamePassword label="Registrar" @submit="authUser" :error="state.errorMessage"/>
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
    ...mapActions(['register', 'login']),
    async authUser (model) {
      this.state.errorMessage = false

      try {
        await this.register({ credentials: model })
        await this.login({ credentials: model })
        this.$router.push({ name: 'heroList' })
      } catch (error) {
        if (error.response) {
          this.state.errorMessage = error.response.data.message
          return
        }
        this.state.errorMessage = error.message
      }
    }
  }
}
</script>
