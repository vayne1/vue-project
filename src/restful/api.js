import Axios from 'axios'
Axios.defaults.baseURL = 'https://www.luffycity.com/api/v1/';

//分类列表api
export const categoryList = ()=>{
	return Axios.get('course_sub/category/list/').then(res=>res);
}

export const allCategoryList = (categoryId)=>{
	return Axios.get(`courses/?sub_category=${categoryId}`).then(res=>res.data);
}