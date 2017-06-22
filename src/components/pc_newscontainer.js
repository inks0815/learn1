import React from 'react';
import {Row, Col} from 'antd';

import {Tabs,Carousel} from 'antd';

import styles from '../css/pc.css'
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
         <Col span={8} className={styles.container}></Col>
             <div className={styles.leftContainer}>
                  <div className={styles.carousel}>
                      <Carousel autoplay>
                       <div><h3>1</h3></div>
                       <div><h3>2</h3></div>
                       <div><h3>3</h3></div>
                       <div><h3>4</h3></div>
                     </Carousel>
                  </div>
             </div>
          <Col span={2}> </Col>
     </Row>
  </div>);

  }
}
