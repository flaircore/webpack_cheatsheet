<template>
  <div id="" class="vue-block-wrapper">
    <h1>The Vue app!!!</h1>
    <h1>The Vue app!!!</h1>
    <h1>The Vue app!!!</h1>
    {{ item.name }}
  </div>
</template>
<script>

const schoolItem = {
  bag: 1,
  books: 17,
  pens: 24
}

const workItem = {
  laptop: 1,
  toolbox: 1,
  work_id: 1
}

const VueApp = {
  name: 'VueApp',
  data() {
    return {
      item: {name: "Nicholas"}
    }
  }
}

export default VueApp
</script>

<style scoped>
  /**

  */
</style>