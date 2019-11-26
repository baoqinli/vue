<template>
	<div>
		<div class="app-header">
			<h1>
				<router-link :to="{path:'/'}">  <!-- 这样写路由就和a练级的跳转一样了-->
					<img src="../../build/logo.png">
				</router-link>
			</h1>
			<div>
				
				<span>{{username}}</span>
				<span v-if="username===''" @click="logClick">登录</span>
				<span v-if="username!==''" @click="quit">退出</span>
				<span v-if="username===''" @click="regClick">注册</span>
				<span @click="aboutClick">关于</span>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer"></div>
		<myDialog :is-show='isShowAboutDialog' @on-close="closeDialog('isShowAboutDialog')">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas praesentium a illo eos sapiente saepe consequatur eveniet nobis rerum at eaque doloribus voluptatem ab laboriosam dolorum quod recusandae quibusdam ad?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas praesentium a illo eos sapiente saepe consequatur eveniet nobis rerum at eaque doloribus voluptatem ab laboriosam dolorum quod recusandae quibusdam ad?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas praesentium a illo eos sapiente saepe consequatur eveniet nobis rerum at eaque doloribus voluptatem ab laboriosam dolorum quod recusandae quibusdam ad?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas praesentium a illo eos sapiente saepe consequatur eveniet nobis rerum at eaque doloribus voluptatem ab laboriosam dolorum quod recusandae quibusdam ad?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas praesentium a illo eos sapiente saepe consequatur eveniet nobis rerum at eaque doloribus voluptatem ab laboriosam dolorum quod recusandae quibusdam ad?
			</p>
			
		</myDialog>
		<myDialog :is-show='isShowLogDialog' @on-close="closeDialog('isShowLogDialog')">
			<LogFrom @has-log="onSuccessLog"></LogFrom>
		</myDialog>
		<myDialog :is-show='isShowRegDialog' @on-close="closeDialog('isShowRegDialog')">
			<RegFrom></RegFrom>
		</myDialog>
		
		
	</div>
</template>

<script>
import Dialog from './dialog'
import LogFrom from './logForm'
import RegFrom from './regForm'
export default {
	components:{
		myDialog:Dialog,
		LogFrom,
		RegFrom,
	},
	data(){
		return{
			isShowAboutDialog:false,
			isShowRegDialog:false,
			isShowLogDialog:false,
			username:''
		}
	},
	methods:{
		logClick(){
			this.isShowLogDialog=true
		},
		regClick(){
			this.isShowRegDialog=true
		},
		aboutClick(){
			this.isShowAboutDialog=true
		},
		closeDialog(attr){
			this[attr]=false
		},
		onSuccessLog(data){
			console.log(data.username)
			this.closeDialog('isShowLogDialog')
			// this.username=data.username
			this.username='张三'
		},
		quit(){
			this.username=''
		}
	}
	
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

ul,
li,
p,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
form,
label,
dl,
dt,
dd,
header,
footer,
nav,
section,
aside,
dialog,
figure,
figcaption,
hgroup,
article {
	display: block;
}

ul {
	list-style: none;
}

.clearfix:after {
	display: block;
	height: 0;
	clear: both;
	content: '.';
	visibility: hidden;
}

.ellipsis {
	white-space: nowrap;
	/*空白不换行*/
	overflow: hidden;
	/*溢出隐藏*/
	text-overflow: ellipsis;
	/*显示省略号*/
}

a {
	text-decoration: none;
}

body {
	background-color: rgb(238,240,241);
	font-family: 'Hiragino Sans GB', 'Hiragino Sans GBW3', 'Microsoft Yahei', STHeiti, SimSun, helvetica, arial, sans-serif;
}
.app-header{
	height: 60px;
	background-color: black;
	display: flex;
	justify-content: space-between;
	color: white;
	align-items: center;
	padding: 0 20px;
}
.app-footer{
	height: 60px;
	background-color:#ccc;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
