<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a href="##">{{ item.name }}</a>
							<span v-if="item.hot">hot</span>
						</li>
					</ul>
				</template>
			</div>
			<div class="index-left-block">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newlist">
						{{ item.title }}
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<div class="index-right-top">
				<sliderShow @onchange='changea' :slides='slides' :inv='slideSpeed'></sliderShow>
			</div>
			<div class="index-right-bottom">
				<div class="index-board-item" v-for="item in boardList">
					<div class="pic" :class="'index-board-'+item.id"></div>
					<div class="pic-right">
						<h3>{{item.title}}</h3>	
						<p>xxx</p>
						<button type="button">立即购买</button>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import sliderShow from '../components/sliderShow'

export default {
	components:{
		sliderShow
	},
	created:function() {
		this.$http.get('http://localhost:3001/getNewsList')
		.then(function(res){
			this.newlist=res.data;
			console.log(this.newlist)
		},function(err){
			console.log(err)
		})
	},
	methods:{
		changea(){
			console.log('运行')
		}
	},
	data() {
		return {
			slideSpeed:2000,
			slides:[
				{
					src:require('../assets/slideShow/pic1.jpg'),
					title:'xxx1',
					href:"detail/analysis"
				},{
					src:require('../assets/slideShow/pic2.jpg'),
					title:'xxx1',
					href:"detail/count"
				},{
					src:require('../assets/slideShow/pic3.jpg'),
					title:'xxx1',
					href:"detail/forecast"
				},{
					src:require('../assets/slideShow/pic4.jpg'),
					title:'xxx1',
					href:"detail/publish"
				}
				
			],
			boardList: [
				{
					title: '开放产品',
					description: '开放产品是一个开放的产品',
					id:'car'
				},
				{
					title: '开放产品',
					description: '开放产品是一个开放的产品',
					id:'earth'
				},
				{
					title: '开放产品',
					description: '开放产品是一个开放的产品',
					id:'loud'
				},
				{
					title: '开放产品',
					description: '开放产品是一个开放的产品',
					id:'mouten'
				}
			],
			newlist: [],
			productList: {
				pc: {
					title: 'pc产品',
					list: [
						{
							name: '数据统计1',
							url: 'https://www.hao123.com/'
						},
						{
							name: '数据统计2',
							url: 'https://www.hao123.com/'
						},
						{
							name: '数据统计3',
							url: 'https://www.hao123.com/',
							hot: true
						},
						{
							name: '数据统计4',
							url: 'https://www.hao123.com/'
						}
					]
				},
				app: {
					title: '应用类',
					list: [
						{
							name: '91手机助手',
							url: 'https://www.hao123.com/'
						},
						{
							name: '91手机助手',
							url: 'https://www.hao123.com/'
						},
						{
							name: '91手机助手',
							url: 'https://www.hao123.com/'
						},
						{
							name: '91手机助手',
							url: 'https://www.hao123.com/'
						}
					]
				}
			}
		};
	}
};
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  /* margin-right: 20px; */
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-wrap {
	display: flex;
}
.index-left {
	width: 25%;
}
.index-right {
	width: 75%;
}
h2,
h3 {
	height: 30px;
	line-height: 30px;
	color: black;
	background-color: seagreen;
	text-align: center;
	font-size: 16px;
	border-bottom: 1px solid black;
}
h3 {
	color: blue;
	background-color: greenyellow;
	font-size: 14px;
}
li {
	height: 30px;
	line-height: 30px;
	text-align: center;
	/* background-color:cyan; */
	border-bottom: 1px solid black;
}
li a {
	font-size: 12px;
	color: white;
	color: black;
}
.index-right-bottom{
	display: flex;
	flex-wrap: wrap;
}
.index-board-item{
	width: 50%;
	display: flex;
	height: 140px;
	background-color: #fff;
	box-sizing: border-box;
}
.pic{
	width: 40%;
}
.pic-right{
	width: 60%;
}
.index-board-car{
	background: url(../assets/1.png) no-repeat;
}
.index-board-earth{
	background: url(../assets/2.png) no-repeat;
}
.index-board-loud{
	background: url(../assets/3.png) no-repeat;
}
.index-board-mouten{
	background: url(../assets/4.png) no-repeat;
}

.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
