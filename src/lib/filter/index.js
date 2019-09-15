import Vue from 'vue'
import timeFiler from './timeFiler' 

const filters = {
	timeFiler,
}
// 全局注册
for (let key in filters) {
    Vue.filter(key, filters[key])
}