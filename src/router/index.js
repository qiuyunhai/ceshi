import Vue from 'vue'
import Router from 'vue-router'
import "../assets/css/header.css"
import headerNav from "../components/header-nav"
import HelloWorld from "../components/HelloWorld.vue"
import Layout from "../pages/Layout.vue"
import Container from "../pages/Container.vue"
import Color from "../pages/Color.vue"
import Typography from "../pages/Typography.vue"
import Button from "../pages/Button.vue"
import Radio from "../pages/Radio.vue"
import Table from "../pages/Table.vue"
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Layout',
		component: Layout
	}, {
		path: '/Container',
		name: 'Container',
		component: Container
	}, {
		path: '/Color',
		name: 'Color',
		component: Color
	}, {
		path: '/Typography',
		name: 'Typography',
		component: Typography
	}, {
		path: '/Button',
		name: 'Button',
		component: Button
	}, {
		path: '/Radio',
		name: 'Radio',
		component: Radio
	}, {
		path: '/Table',
		name: 'Table',
		component: Table
	}]
})