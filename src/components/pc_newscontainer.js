import React from 'react';
import {Row, Col} from 'antd';

import {Tabs,Carousel} from 'antd';

import styles from '../css/pc.css';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane =Tabs.TabPane;

export default class PCNewsContainer extends React.Component {


  render(){
    const settings={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    };
  return(
  <div>
     <Row>
         <Col span={2}> </Col>
         <Col span={1} className={styles.container}></Col>
             <div className={styles.leftContainer}>
                  <div className={styles.carousel}>
                      <Carousel autoplay>
                       <div><h3>1</h3></div>
                       <div><h3>2</h3></div>
                       <div><h3>3</h3></div>
                       <div><h3>4</h3></div>
                     </Carousel>

                  </div>
                  <PCNewsImageBlock count={8} type="guoji" width="300px" cartTitle="国际头条" imageWidth="112px"/>
             </div>
            
             <Tabs className={styles.tabs_news}>
                  <TabPane tab="新闻" key="1">
                          <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                  </TabPane>
                  <TabPane tab="娱乐" key="2">
                          <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                  </TabPane>
             </Tabs>

          <Col span={2}> </Col>
     </Row>
  </div>);

  }
}
