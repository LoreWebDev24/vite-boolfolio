<template>
    <span>Test Im in the Show</span>
    <div v-if="project">
      <div class="container">
        <h1>{{  project.title }}</h1>
        <!-- <h2>{{ post.slug }}</h2> -->
        <h4 >{{ project.type?.name }}</h4>
        <ul class="technologies">
          <li v-for="technology in project.technologies" :key="technology.id">
            {{ technology.name }}
          </li>
        </ul>
      </div>
      <div class="container" v-html="project.content">
      </div>
      <!-- <p v-html="post.content">
         content of the proj -->
      <!-- </p> --> 
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    props: {
        // type of slug
      slug: String
    },
    data() {
      return {
        project: null,
        URL: 'http://127.0.0.1:8000/api'
      }
    },
    methods: {
      fetchProject() {
        axios.get(`${this.URL}/projects/${this.slug}`)
        .then(res => {
            console.log(res)
          this.project = res.data.project
        })
        .catch((error) => {
          if(error.response.status === 404) {
            console.log(error.response)
            this.$router.push({ name: 'not-found' })
          }
        })
      }
    },
    created() {
      this.fetchProject()
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
  .technologies {
    padding: 20px;
    display: flex;
    gap: 18px;
  }
  </style>