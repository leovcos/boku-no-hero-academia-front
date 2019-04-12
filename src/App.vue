<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cadastrar">Cadastrar</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './sass/main.scss';
</style>
