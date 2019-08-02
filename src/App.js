import React, { lazy ,Suspense } from 'react'

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
const Banner_son = lazy(()=>import('./pages/home/root/children/home_banner/banner_son'));
const Nav_son = lazy(()=>import('./pages/home/root/children/home_nav/nav_son'));
const GoodLesson_son = lazy(()=>import('./pages/home/root/children/home_goodLesson/goodLesson_son'));
const Interest_son = lazy(()=>import('./pages/home/root/children/home_interest/interest_son'));
const Career_son = lazy(()=>import('./pages/home/root/children/home_career/career_son'));

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

 {/* pages下的公共子页面 */}
 const Payment = lazy(()=>import('./pages/common/payment/Payment'));
export default ()=> {
 
    return (
      <Router>
        <div id="app">
          <Suspense fallback={<Loading/>}>
          <CacheSwitch>
          
            {/* 根路由 */}
            < Route path="/" exact render={()=><Redirect to="/home"/>}/>
            < CacheRoute exact path="/home" component={Home}/>
               {/* 首页的子页面 */}
              
            <Route path="/home/search" component={Search}/>
            <Route path="/home/banner_son/:id" component={Banner_son}/>
            <Route path="/home/nav_son/:id" component={Nav_son}/>
            <Route path="/home/goodLesson_son/:id" component={GoodLesson_son}/>
            <Route path="/home/interest_son/:id" component={Interest_son}/>
            <Route path="/home/career_son/:id" component={Career_son}/>

            < CacheRoute exact path="/learn" component={Learn}/>
               {/* 学习页面的子页面 */}
            <Route path="/learn/enroll" component={Enroll}/>
            <Route path="/learn/login" component={Login}/>
            <Route path="/learn/myclass" component={MyClass}/>
            <Route path="/learn/mymajor" component={MyMajor}/>

            < CacheRoute exact path="/mine" component={Mine}/>
             {/* 账号的子页面 */}
            <Route path="/mine/card" component={Card}/>
            <Route path="/mine/cart" component={Cart}/>
            <Route path="/mine/discount" component={Discount}/>
            <Route path="/mine/enjoy" component={Enjoy}/>
            <Route path="/mine/order" component={Order}/>
            
            {/* pages下的公共页面 */}
            <Route path="/payment" component={Payment}/>

            <Route path="/404" component={NotFind}/>
            <Route render={()=><Redirect to="/404"/>}/>
         
         
          </CacheSwitch>
            </Suspense>
          <Route component={TabBar}/>
          
          
        </div>
        
      </Router>
    )
  
}
