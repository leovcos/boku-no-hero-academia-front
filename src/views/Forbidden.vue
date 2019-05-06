<template>
  <div class="page page-forbidden">

    <div class="page-forbidden__image"></div>
    <div class="page-forbidden__message">
      <p>
        <a class="button is-primary" @click="$router.go(-1)">Voltar</a>
      </p>
      Você não tem acesso para isso
    </div>

  </div>
</template>
