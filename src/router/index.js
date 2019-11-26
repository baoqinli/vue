import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import VueResource from 'vue-resource'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import detailAnaPage from '@/pages/detail/analysis'
import detailCouPage from '@/pages/detail/count'
import detailForPage from '@/pages/detail/forecast'
import detailPubPage from '@/pages/detail/publish'
import OrderListPage from '@/pages/orderList'
import cc from "@/pages/detail/cc"

import aa from "@/pages/a"
import bb from "@/pages/b"

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		component: IndexPage
	},{
		path: '/orderList',
		component: OrderListPage
	},{
		path: '/aa',
		component: aa
	},{
		path: '/bb',
		component: bb
	},
	
	
	
	{
		path: '/detail',
		component: DetailPage,
		redirect:'/detail/analysis',//是这个页面的时候回直接导向这里面的这个页面
		children:[//子路由写法和上面一样
			{
				path:"analysis",//前面不能加/否则会回到根
				component:detailAnaPage
			},{
				path:"count",
				component:detailCouPage
			},{
				path:"forecast",
				component:detailForPage
			},{
				path:"publish",
				component:detailPubPage
			},{
				path:"cc",
				component:cc
			}
		]
	}]
})
