import Vue from 'vue'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import cookies from 'browser-cookies';
import App from '@/components/layout/App';

Vue.config.productionTip = false;

(async () => {
	const csrf = cookies.get('XSRF-TOKEN')
	const response = await fetch('/api/post-example', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'x-xsrf-token': csrf,
		},
	});

	const body = await response.json()

	console.log(body)
})()

const progressBarOptions = {
	color: '#bffaf3',
	failedColor: '#874b4b',
	thickness: '2px',
	transition: {
		speed: '0.2s',
		opacity: '0.6s',
		termination: 300
	},
	autoRevert: true,
	location: 'left',
	inverse: false
}
Vue.use(VueProgressBar, progressBarOptions)

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});