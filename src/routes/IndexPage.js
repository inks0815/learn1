import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import PCIndex from './pc_index';
import MobileIndex from './mobile_index';
import { Router, Route, hashHistory } from 'dva/router';
import MediaQuery  from 'react-responsive';
import PCNewsDetails from '../components/pc_news_details';
import MobileNewsDetails from '../components/mobile_news_details';

function IndexPage() {
  return (
    <div>
        <MediaQuery  query='(min-device-width: 1244px)'>
          <Router history={hashHistory}>
          <Route path="/" component={PCIndex}></Route>
          <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
        </Router>

        </MediaQuery>
        <MediaQuery  query='(max-device-width: 1244px)'>
          <Router history={hashHistory}>
						<Route path="/" component={MobileIndex}></Route>
						<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
					</Router>

        </MediaQuery>
    </div>


  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
