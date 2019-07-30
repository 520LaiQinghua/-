import api from '../../request/api'
import {get} from '../../request'

// types
const SET_CAREER = 'home/set_career';

// 初始值
const initialState = {
    title: '首页',
    career: [],
   
}

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        //设置畅销好课图数据
        case SET_CAREER:
            return {
                ...state,
                career: action.value
            }
        default:
            return state;
    }
}

// 同步action
// 设置畅销好课数据
const setCareerData = (params)=>{
    return {
        type: SET_CAREER,
        value: params
    }
}

// 异步action
//请求畅销好课数据
export const requestCareerData = ()=>{
    return async (dispatch)=>{
        //请求
    let {data} = await get(api.HOME_CAREER);
    
    // 构建action,取出data里对应的数据
      let newData = data.result.sectionDtoList;
      let career = []; 
      newData.forEach((item,index) => {
			career.push(item.elementDtoList)
          });
          let newCareer=career[2]
		//  console.log(newLesson);
    let action = setCareerData(newCareer);
//console.log(newCareer);
    // 派发action
    dispatch(action);
    }
    
}