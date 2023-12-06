import Vue from 'vue'
import VueRouter from 'vue-router'
import NewPage from '../components/FilmPage.vue'

Vue.use(VueRouter)

const routes = [{path: '/filmpage', name: 'FilmPage', component: NewPage}]
const router = new VueRouter({routes})

export default router