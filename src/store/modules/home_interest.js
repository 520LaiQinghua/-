import api from '../../request/api'
import {get} from '../../request'

// types
const SET_INTEREST = 'home/set_cinterest';

// 初始值
const initialState = {
    title: '首页',
    interest: [],
   
}

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        //设置畅销好课图数据
        case SET_INTEREST:
            return {
                ...state,
                interest: action.value
            }
        default:
            return state;
    }
}

// 同步action
// 设置畅销好课数据
const setInterestData = (params)=>{
    return {
        type: SET_INTEREST,
        value: params
    }
}

// 异步action
//请求畅销好课数据
export const requestInterestData = ()=>{
    return async (dispatch)=>{
        //请求
    let {data} = await get(api.HOME_INTEREST);
    
    // 构建action,取出data里对应的数据
      let newData = data.result.sectionDtoList;
      let interest = []; 
      newData.forEach((item,index) => {
			interest.push(item.elementDtoList)
          });
          let newInterest=interest[7]
		  //console.log(interest);
    let action = setInterestData(newInterest);
//console.log(newCareer);
    // 派发action
    dispatch(action);
    }
    
}