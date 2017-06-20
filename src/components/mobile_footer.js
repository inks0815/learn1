import React from 'react';
import {Row, Col} from 'antd';
import logostyles from '../css/pc.css'
export default class MobileFooter extends React.Component  {
  constructor(){
    super();
    this.state ={
      current:'top'
    };
  }

  render() {

    return(
      <footer>
          <Row>
             <Col span={2}></Col>
             <Col span={20} className={logostyles.footer}>
                &copy;&nbsp;2017 reactnews. ALL Right Reserved
             </Col>

             <Col span={2}></Col>
          </Row>
      </footer>
    );

  }
}
