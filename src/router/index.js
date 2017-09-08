import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods'
import Comment from '@/components/Comment'
import Detail from '@/components/Detail'

Vue.use(Router)
export default new Router({
    mode: 'history',
    linkActiveClass: 'routerActive',
    routes: [
        /*{
         path: '/',
         name: 'Hello',
         component: Hello
         }*/
        {path: '*', redirect: '/goods'},
        {path: '/goods', component: Goods},
        {path: '/comment', component: Comment},
        {path: '/detail', component: Detail}
    ]
})
