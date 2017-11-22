Vue.component('v-about', {
	template: `<div v-show="show">
		<div class="other">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
				<div v-for="(_message, _t) of message">
					<h3 >{{_t}}</h3>
					<p v-for="mes of _message">{{mes}}</p>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
		return {
			title: "关于／About",
			message: {
				"关于本站":[
					"这只是一个静态页面",
					"一个关于前端技术的博客",
					"主要用于我自己的个人宣传",
					"因为现在在找工作，所以又多了一个找工作的功能"
				],
				"关于我":[
					"工作三年",
					"待过非著名公司也待过著名公司",
					"一直呕心沥血，一直积极向上，一直发奋图强",
					"一直致力于追求美的（代码、视觉、设计）东西"
				]
			}
		}
	}
});