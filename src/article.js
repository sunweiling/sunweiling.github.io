Vue.component('v-article', {
	template: `<div v-show="show">
		<div class="other">

		</div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			article : {

			}
		}
		return data
	},
	methods:{
		
	}
});