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
					"主要用于我自己的个人学习",
					"因为现在在找工作，所以又多了一个找工作的功能",
					"找不到工作的话，我希望他又会多一个功能，帮我接接外包"
				],
				"关于我":[
					"工作三年",
					"毕业以后一直待在一家非著名公司",
					"一直呕心沥血，一直积极向上，一直发奋图强",
					"于是现在开始找工作"
				]
			}
		}
	}
});