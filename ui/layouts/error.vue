<template>
  <div class="container mx-auto flex justify-center items-center h-100">
    <i class="material-icons md-96 text-gray-800">error_outline</i>
    <div>
      <h1 class="text-xl" v-if="error.statusCode === 404">Seite nicht gefunden!</h1>
      <h1 class="text-xl" v-else>Ein Fehler ist aufgetreten!</h1>
      <nuxt-link class="text-gray-800 primary-text-hover" to="/"><b>Home page</b></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>