<template>
    <div class="card">
      <h4>{{  project.title }}</h4>
      <h4 class="type" v-if="project.type">{{  project.type.name }}</h4>
      <router-link :to="{ name: 'projects.show', params: { slug: project.slug }}" >Read this Project</router-link>
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
    .type {
        color: red;
        padding-top: 8px;
    }
  </style>