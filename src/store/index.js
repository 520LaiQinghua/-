import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import banner from './modules/home_banner'



const reducer = combineReducers({
     banner,
   
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
 
export default store;
