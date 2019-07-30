import api from '../../request/api'
import {get} from '../../request'

// types
const SET_GOODLESSON = 'home/set_goodLesson';

// 初始值
const initialState = {
    title: '首页',
    goodLesson: [],
   
}

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        //设置畅销好课图数据
        case SET_GOODLESSON:
            return {
                ...state,
                goodLesson: action.value
            }
        default:
            return state;
    }
}

// 同步action
// 设置畅销好课数据
const setGoodLessonData = (params)=>{
    return {
        type: SET_GOODLESSON,
        value: params
    }
}

// 异步action
//请求畅销好课数据
export const requestGoodLessonData = ()=>{
    return async (dispatch)=>{
        //请求
    let {data} = await get(api.HOME_GOODLESSON);
    
    
    
    // 构建action,取出data里对应的数据
      let newData = data.result.sectionDtoList;
      let lesson = []; 
      newData.forEach((item,index) => {
			lesson.push(item.elementDtoList)
          });
          let newLesson=lesson[0]
		//  console.log(newLesson);
    let action = setGoodLessonData(newLesson);
    //console.log(newLesson);
    // 派发action
    dispatch(action);
    }
    
}