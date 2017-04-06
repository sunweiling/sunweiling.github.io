Vue.component('v-article', {
	template: `<div v-show="show">
		<div class="other">
			<ul class="menu">
				<li v-for="(_ar, key, index) in article">
					<a :href="'#name'+ index">{{key}}</a>
				</li>
			</ul>
			<div class="a-right">
				<div v-for="(_ar, key, index) in article">
					<a :name="'name'+index" class="a-title">{{key}}</a>
					<a v-for="ari of _ar" :href="ari.url" target="_blank">
					{{ari.name}}
					</a>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			article:{
				"偏界面类": [{
					name: "初学canvas仿知乎登录页面动画",
					url:"https://mp.weixin.qq.com/s/e5aCrcYXjtl5msclPyDMgA"
				},{
					name:"要多简单就有多简单的H5拍照加水印",
					url:"https://segmentfault.com/a/1190000007098531"
				},{
					name: "教你五分钟入门使用html5 svg绘制图形",
					url:"https://segmentfault.com/a/1190000006235626"
				},{
					name:"css3实现3d答案之书翻阅",
					url:"https://mp.weixin.qq.com/s?__biz=MjM5MDk5MzE2Mw==&mid=2527293987&idx=1&sn=baba0350b5d2c1f00093e8b7054fe70a&scene=19#wechat_redirect"
				},{
					name: "css3 checked属性写导航目录",
					url:"https://segmentfault.com/a/1190000005958412"
				},{
					name:"用css3让你的按钮酷炫起来",
					url:"http://mp.weixin.qq.com/s/EdRSaZYZSwpgNc8jo30jCA"
				}],
				"偏代码类": [{
					name: "谁说前端非得等后端写完api才能开发",
					url:"http://mp.weixin.qq.com/s/UiZGtUv1BqXfUL51jccT_g"
				},{
					name:"使用CommonJS，AMD以及CMD编写模块化JavaScripts",
					url:"https://segmentfault.com/a/1190000006138597"
				},{
					name: "前端开发之单一职责原则",
					url:"https://segmentfault.com/a/1190000005870557"
				},{
					name:"ES6的语法讲解",
					url:"https://segmentfault.com/a/1190000006712555"
				},{
					name: "如何不用for，while循环解决循环问题",
					url:"https://mp.weixin.qq.com/s?__biz=MjM5MDk5MzE2Mw==&mid=2527294335&idx=1&sn=0ef68e7a0484c9f54b2e230b1ab34fdd&mpshare=1&scene=1&srcid=0927dyOhmnqFK47gTyCHubeg#rd"
				},{
					name:"前端解决跨域问题的N种方法之postMessage",
					url:"https://segmentfault.com/a/1190000007136269"
				},{
					name:"用JS学算法之Two Sum",
					url:"https://zhuanlan.zhihu.com/p/25672735"
				}],
				"杂文类": [{
					name: "好用的sublime text 插件(有空的时候持续更新)",
					url:"https://segmentfault.com/a/1190000007188586"
				},{
					name:"要么 css 牛逼，要么 js 牛逼",
					url:"http://mp.weixin.qq.com/s?__biz=MjM5MDk5MzE2Mw==&mid=2527294468&idx=1&sn=d35cfa44eb44c6b38fb1dcd38fa186d5&chksm=b5eb8a60829c0376f5e74219768bfad897e335af4fb727dde90ba47cb2282584f5e59f2d689a&mpshare=1&scene=1&srcid=1116Zr82InAZPI1Jr20jz4Dt#rd"
				}]
			},
		}
		return data
	},
	methods:{
		
	}
});