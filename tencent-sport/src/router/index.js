import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'index',
      component: resolve=>require(['@/page/index.vue'],resolve),
      redirect:'/competition/recommend',
      children:[
      	{
      		path:'/competition',
      		name:'competition',
      		component:resolve=>require(['@/page/home/competition'],resolve),
      		children:[
		      	{
		      		path:'/competition/recommend',
		      		name:'recommend',
		      		component:resolve=>require(['@/components/tunnels/recommend'],resolve)
		      	},
            {
              path: '/competition/video',
              name: 'video',
              component: resolve => require(['@/components/tunnels/video'], resolve)
            }
	      	]
      	},

        {
          path: '/community',
          name: 'community',
          component: resolve => require(['@/page/home/community'], resolve),
          children: [
            {
              path: '/community/hotpost',
              name: 'hotpost',
              component: resolve => require(['@/components/community/hotpost'], resolve)
            }, {
              path: '/community/mycircle',
              name: 'mycircle',
              component: resolve => require(['@/components/community/mycircle'], resolve)
            }, {
              path: '/community/activies',
              name: 'activies',
              component: resolve => require(['@/components/community/activies'], resolve)
            }, {
              path: '/community/all',
              name: 'communityall',
              component: resolve => require(['@/components/community/all'], resolve)
            }
          ]
        },

        {
          path: '/agenda',
          name: 'agenda',
          component: resolve => require(['@/page/home/agenda'], resolve),
          children: [
            {
              path: '/agenda/focus',
              name: 'focus',
              component: resolve => require(['@/components/agenda/focus'], resolve)
            }, {
              path: '/agenda/all',
              name: 'agendaall',
              component: resolve => require(['@/components/agenda/all'], resolve)
            }, {
              path: '/agenda/popular',
              name: 'popular',
              component: resolve => require(['@/components/agenda/popular'], resolve)
            }
          ]
        },
        {
          path:'/mine',
          name:'mine',
          component:resolve => require(['@/page/home/mine'], resolve),
          redirect: '/mine/index',
          children: [{
            path: '/mine/index',
            component: resolve => require(['@/components/mine/index'], resolve)
          }]
        }
      ]
    },
  ]
})
