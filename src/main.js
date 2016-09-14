import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './routes'

/* eslint-disable no-new */
Vue.use(Router)

let router = new Router({
	// history: true
})

router.map(routes)
router.start({App},'body') 
