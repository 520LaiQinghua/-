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
        //设置首页轮播图数据
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
// 设置首页轮播图数据
const setGoodLessonData = (params)=>{
    return {
        type: SET_GOODLESSON,
        value: params
    }
}

// 异步action
//请求首页轮播图数据
export const requestGoodLessonData = ()=>{
    return async (dispatch)=>{
        //请求
    let{data} = await get(api.HOME_BANNER);
    // 构建action
    let newData = data.data
    let action = setGoodLessonData(newData);
    // 派发action
    dispatch(action);
    }
    
}