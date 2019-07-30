import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import banner from './modules/home_banner'
import goodLesson from './modules/home_goodLesson'
import career from './modules/home_career'


const reducer = combineReducers({
     banner,
     goodLesson,
     career,
   
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
 
export default store;
