<template>
  <form class="FormLogin" @submit.prevent="$emit('submit', model)">
    <div class="field">
      <p class="control">
        <input class="input" required type="text" placeholder="Usuário" v-model="model.username">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" required type="password" placeholder="Senha" v-model="model.password">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button type="submit" class="button is-primary">{{label}}</button>
      </p>
    </div>
    <div class="message" v-if="error">{{error}}</div>
  </form>
</template>

<script>

export default {
  props: {
    error: {
      type: null,
      default: ''
    },
    label: {
      type: String,
      default: 'Entrar'
    }
  },
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
  }
}
</script>
