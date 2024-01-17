<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      URL: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.URL}/projects`)
      .then((res) => {
        console.log(res)
        this.projects = res.data.results.data
      })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<template>
    <div>
      <div class="container">
        <h1>
            Team Projects
        </h1>
      </div>
  
      <div class="container projects-container">
        <div class="grid">
          <ProjectCard class="card" v-for="project in projects" :project="project" :key="project.id"/>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4,1fr);
  }
  </style>