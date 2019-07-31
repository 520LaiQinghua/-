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


//首页子页面
const Search = lazy(()=>import('./pages/home/search/Search'));

//学习子页面
const MyClass = lazy(()=>import('./pages/learn/myclass/myclass'));
const  MyMajor = lazy(()=>import('./pages/learn/mymajor/mymajor'));
const Enroll = lazy(()=>import('./pages/learn/root/children/enroll'));
const Login = lazy(()=>import('./pages/learn/root/children/login'));

//账号的子页面
const Card = lazy(()=>import('./pages/mine/children/mine_card/card'));
const Cart = lazy(()=>import('./pages/mine/children/mine_cart/cart'));
const Discount = lazy(()=>import('./pages/mine/children/mine_discount/discount'));
const Enjoy = lazy(()=>import('./pages/mine/children/mine_enjoy/enjoy'));
const Order = lazy(()=>import('./pages/mine/children/mine_order/order'));


export default ()=> {
 
    return (
      <Router>
        <div id="app">
          <Suspense fallback={<Loading/>}>
          <CacheSwitch>
          
            {/* 根路由 */}
            < Route path="/" exact render={()=><Redirect to="/home"/>}/>
            < CacheRoute exact path="/home" component={Home}/>
            <Route path="/home/search" component={Search}/>

            < CacheRoute exact path="/learn" component={Learn}/>

            <Route path="/learn/enroll" component={Enroll}/>
            <Route path="/learn/login" component={Login}/>
            < CacheRoute exact path="/mine" component={Mine}/>
            
            <Route path="/mine/card" component={Card}/>
            <Route path="/mine/cart" component={Cart}/>
            <Route path="/mine/discount" component={Discount}/>
            <Route path="/mine/enjoy" component={Enjoy}/>
            <Route path="/mine/order" component={Order}/>
            
            <Route path="/404" component={NotFind}/>
            <Route render={()=><Redirect to="/404"/>}/>
           {/* 子理由 */}
         
          </CacheSwitch>
          <Fragment>
            {/* 首页的子页面 */}
            
           
            {/* 学习页面的子页面 */}
            <Route path="/learn/myclass" component={MyClass}/>
            <Route path="/learn/mymajor" component={MyMajor}/>
          
           
           
          
         
           
            {/* 账号的子页面 */}
           
            </Fragment>
            </Suspense>
          <Route component={TabBar}/>
          
          
        </div>
        
      </Router>
    )
  
}
