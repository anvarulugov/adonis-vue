import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/components/Index'
import About from '@/components/About'

export default new Router({
	// ... other settings
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
			meta: {
				progress: {
					func: [
						{ call: 'color', modifier: 'temp', argument: '#ffb000' },
						{ call: 'fail', modifier: 'temp', argument: '#6e0000' },
						{ call: 'location', modifier: 'temp', argument: 'top' },
						{ call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 } }
					]
				}
			}
		},
		{
			path: '/about',
			name: 'About',
			component: About,
			meta: {
				progress: {
					func: [
						{ call: 'color', modifier: 'temp', argument: '#ffb000' },
						{ call: 'fail', modifier: 'temp', argument: '#6e0000' },
						{ call: 'location', modifier: 'temp', argument: 'top' },
						{ call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 } }
					]
				}
			}
		},
	]
})