import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'
import PublicCourse from '@/components/PublicCourse/PublicCourse'
import CourseDetail from '@/components/Course/CourseDetail'

Vue.use(Router)

export default new Router({
	linkActiveClass:'is-active',
	mode:'history',
  routes: [
    {
      path: '/',
			redirect:'/home'
    },
		{
			path:'/home',
			name:'Home',
			component:Home
		},
		{
			path:'/course',
			name:'Course',
			component:Course
		},
		{
			path:'/lightcourse',
			name:'LightCourse',
			component:LightCourse
		},
		{
			path:'/micro',
			name:'Micro',
			component:Micro
		},
		{
			path:'/publiccourse',
			name:'PublicCourse',
			component:PublicCourse
		},
		{
			path:'/course/detail/web/:detailId',
			name:'course.detail',
			component:CourseDetail
		},
  ]
})
