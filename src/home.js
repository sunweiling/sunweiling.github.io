Vue.component('v-home', {
	template: `<div v-show="show">
	    <div class="bg" :style='bg_src'></div>
		<div class="b-title">
		<transition-group name="list" tag="p">	
		    <span v-for="item in show_key" v-bind:key="item" class="list-item">
		      {{ item }}
		    </span>
	  	</transition-group>
	  	<transition-group name="list-after" tag="p">	
		    <span v-for="item in show_key_last" v-bind:key="item" class="list-item2">
		      {{ item }}
		    </span>
	  	</transition-group>
	  	</div>
		<div class="cover"></div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			check: -1,
			check_last: -1,
			bg_src: "background-image: url('img/bg.jpeg')",
			keys: ["早睡早起","常做运动"],
			keys_last: ["多","与","异","性","交","朋","友"],
			show_key: [],
			show_key_last: [],
			timer_keys_last: null,
			timer_keys: null
		}
		return data
	},
	methods:{
		show_keys: function(){
			this.check ++;
			if(this.check >= 2){
				clearTimeout(this.timer_keys);
				this.check_last = -1;
				this.show_keys_last();
				return;
			}
			this.show_key.push(this.keys[this.check]);
			this.timer_keys = setTimeout(this.show_keys, 1000);
		},
		show_keys_last: function(){
			this.check_last ++;
			if(this.check_last >= 7){
				clearTimeout(this.timer_keys_last);
				return;
			}
			this.show_key_last.push(this.keys_last[this.check_last]);
			this.timer_keys_last = setTimeout(this.show_keys_last, 500);
		}
	}
});