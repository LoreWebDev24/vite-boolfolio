<template>
    <div class="card">
      <h4>{{  project.title }}</h4>
      <p v-if="project.type">{{  project.type.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .card {
      padding: 20px;
      border-radius: 12px;
      background: lightgray;
    }
  </style>