<template>
  <form class="FormLogin" @submit.prevent="$emit('submit', output)">
    <div class="field">
      <p class="control">
        <input class="input" required type="text" placeholder="Nome" v-model="model.name">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" required type="text" placeholder="Poder" v-model="model.quirkName">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" required type="text" placeholder="Sala" v-model="model.classroomName">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" required type="text" placeholder="URL da imagem" v-model="model.image">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" required type="date" placeholder="Data de aniversário" v-model="model.birthday">
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
      default: 'Adicionar herói'
    }
  },
  computed: {
    output () {
      let modelClone = Object.assign({}, this.model)

      return {
        name: modelClone.name,
        image: modelClone.image,
        birthday: modelClone.birthday,
        quirk: {
          name: modelClone.quirkName
        },
        classroom: {
          name: modelClone.classroomName
        }
      }
    }
  },
  data () {
    return {
      state: {
        errorMessage: false
      },
      model: {
        name: '',
        classroomName: '',
        birthday: '',
        quirkName: ''
      }
    }
  }
}
</script>
