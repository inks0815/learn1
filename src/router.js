import React from 'react';
import { Router, Route } from 'dva/router';
//import IndexPage from './routes/IndexPage';
import PCIndex from './routes/pc_index';
import MobileIndex from './routes/mobile_index';
import MediaQuery  from 'react-responsive';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter'

function RouterConfig({ history }) {
  return (
    <div>
        <MediaQuery  query='(min-device-width: 1244px)'>
          <Router history={history}>
          <Route path="/" component={PCIndex}></Route>
          <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
          <Route path="/usercenter" component={PCUserCenter}></Route>
          <Route path="/shehui" component={PCUserCenter}></Route>
        </Router>

        </MediaQuery>
        <MediaQuery  query='(max-device-width: 1244px)'>
          <Router history={history}>
						<Route path="/" component={MobileIndex}></Route>
						<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            <Route path="/usercenter" component={MobileUserCenter}></Route>
					</Router>

        </MediaQuery>
    </div>
  );
}

export default RouterConfig;
