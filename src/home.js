Vue.component('v-home', {
	template: `<div v-show="show">
		<div class="bg" style='background-image: url("img/bg.jpeg");'></div>
		<div class="cover"></div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			bgs:{

			}
		}
		return data
	},
	methods:{
		
	}
});