import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contant from '@/component/mian'
import Find from '@/component/find'
import Home from '@/component/home'
import Exit from '@/component/exit'
import My from '@/component/my'
import Edit from '@/component/Edit'
import DetailView from '@/component/DetailView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
			redirect: '/home',
			children:[
                // index页面
                {
                    name: 'home',
                    path: '/home',
                    component: Home,
                },
								{
										name: 'find',
										path: '/find',
										component: Find,
								},
								{
										name: 'my',
										path: '/my',
										component: My,
								},
								{
										name: 'exit',
										path: '/exit',
										component: Exit,
								},
								{
                	path:'/Edit',
                	name:'Edit',
                	component:Edit
								},
								{
									path:'DetailView/:id',
									name:'DetailView',
									component:DetailView
								}
            ]
    }
  ]
})
