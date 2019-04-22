<template>
  <form class="FormLogin" @submit.prevent="$emit('submit', model)">
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
  }
}
</script>
