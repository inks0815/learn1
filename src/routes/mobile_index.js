import React from 'react';
import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';
import MobileList from '../components/mobile_list';
import MobileListPullRefresh from '../components/mobile_list_pull_refresh'
import {Tabs} from 'antd';
const TabPane =Tabs.TabPane;
export default class MobileIndex extends React.Component  {


  render() {

    return(
           <div>
              <MobileHeader></MobileHeader>
              <Tabs>
                   <TabPane tab="头条" key="1">
                       <MobileList count={20} type="top" />
                   </TabPane>
                   <TabPane tab="社会" key="2">
                   </TabPane>
                   <TabPane tab="国内" key="3">
                      <MobileListPullRefresh count={20} type="guonei" />
                   </TabPane>
                   <TabPane tab="国际" key="4">
                   </TabPane>
                   <TabPane tab="娱乐" key="5">
                   </TabPane>

              </Tabs>
              <MobileFooter></MobileFooter>

           </div>
    );

  }
}
