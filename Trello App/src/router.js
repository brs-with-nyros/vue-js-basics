import Vue from 'vue'
import Router from 'vue-router'
import Board from './views/Board.vue'
import Task from './views/Task.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'board',
            component: Board,
            children: [{
                path: 'task/:id',
                name: 'task',
                component: Task
            }]
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})