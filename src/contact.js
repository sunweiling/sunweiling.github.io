Vue.component('v-contact', {
	template: `<div v-show="show">
		<div class="other">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
				<h3>{{info}}／{{mail}}</h3>
				<div class="o-con">
					<div v-for="(_message, _t) of message">
						<a :href="_message.href" target="_blank"><img :src="_message.pic"/></a>
						<div>{{_t}}:{{_message.name}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			title: "联系我／Contact",
			info: "扫描或点击图片二维码",
			message: {
				"新浪微博": {
					name: "有一个姑娘在coding",
					pic: "./img/weibo.jpg",
					href: "http://weibo.com/u/5750254341?refer_flag=1001030101_&is_hot=1"
				},
				"微信公众号":{
					name: "有一个姑娘在coding",
					pic: "./img/weixin.jpg",
					href: "http://mp.weixin.qq.com/mp/homepage?__biz=MjM5MDk5MzE2Mw==&hid=1&sn=c156f12e6c46f78445fd1dbc957d44a3#wechat_redirect"
				},
				"github": {
					name: "sunweiling",
					pic: "./img/github.jpg",
					href: "https://github.com/sunweiling"
				}
			},
			mail:"317764217@qq.com"

		}
		return data
	}
});