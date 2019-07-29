import React, { lazy ,Suspense ,Fragment} from 'react'

import { BrowserRouter as Router,
   Route,
    // Switch,
     Redirect
    } from 'react-router-dom'
import CacheRoute,{CacheSwitch} from 'react-router-cache-route';
import TabBar from './components/tab-bar'
import Loading from './components/loading/index'

//根页面
const Home = lazy(()=>import('./pages/home/root/Home'));
const Learn = lazy(()=>import('./pages/learn/root/Learn'));
const Mine = lazy(()=>import('./pages/mine/root/Mine'));
const NotFind = lazy(()=>import('./pages/common/not-find/NotFind'));


//子页面
const Search = lazy(()=>import('./pages/home/search/Search'));
const MyClass = lazy(()=>import('./pages/learn/myclass/myclass'));
const  MyMajor = lazy(()=>import('./pages/learn/mymajor/mymajor'));
const Enroll = lazy(()=>import('./pages/learn/root/children/enroll'));
const Login = lazy(()=>import('./pages/learn/root/children/login'));




export default ()=> {
 
    return (
      <Router>
        <div id="app">
          <Suspense fallback={<Loading/>}>
          <CacheSwitch>
          
            {/* 根路由 */}
            < Route path="/" exact render={()=><Redirect to="/home"/>}/>
            < CacheRoute path="/home" component={Home}/>
            < CacheRoute path="/learn" component={Learn}/>
            < CacheRoute path="/mine" component={Mine}/>
            <Route path="/404" component={NotFind}/>
            <Route render={()=><Redirect to="/404"/>}/>
           
          </CacheSwitch>
          <Fragment>
            {/* 首页的子页面 */}
            <Route path="/home/search" component={Search}/>
            {/* 学习页面的子页面 */}
            <Route path="/learn/myclass" component={MyClass}/>
            <Route path="/learn/mymajor" component={MyMajor}/>
            <Route path="/learn/enroll" component={Enroll}/>
            <Route path="/learn/login" component={Login}/>
            {/* 账号的子页面 */}
           
            </Fragment>
            </Suspense>
          <Route component={TabBar}/>
          
          
        </div>
        
      </Router>
    )
  
}
