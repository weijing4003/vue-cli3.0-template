import Vue from 'vue'
import timeFiler from './timeFiler' 

const filters = {
	timeFiler,
}
for (let key in filters) {
    Vue.filter(key, filters[key])
}