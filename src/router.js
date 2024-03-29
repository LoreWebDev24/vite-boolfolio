import { createRouter, createWebHistory } from 'vue-router'

import ProjectIndex from './pages/projects/Index.vue'
import ProjectShow from './pages/projects/Show.vue'
import Contact from './pages/Contact.vue'
import NotFound from './pages/404.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ProjectIndex,
		},
		{
			path: '/blog/:slug',
			name: 'projects.show',
			props: true,
			component: ProjectShow,
		},
		{
			path: '/contatti',
			name: 'contacts',
			component: Contact,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound,
		},
	],
})

export { router }