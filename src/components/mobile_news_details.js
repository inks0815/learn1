import React from 'react';
import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';
import {Row,Col, BackTop} from 'antd';
import styles from '../css/pc.css';
import CommonComments from './common_comments'
export default class MobileNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ""
    };
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({newsItem: json}));
    document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
  }

  createMarkup() {
    return {__html: this.state.newsItem.pagecontent};
  }
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <div className={styles.ucmobileList}>
        <Row>

          <Col span={24} >
            <div className={styles.articleContainer} dangerouslySetInnerHTML={this.createMarkup()}></div>
            <CommonComments  uniquekey={this.props.params.uniquekey}></CommonComments>
          </Col>

        </Row>
         </div>
        <MobileFooter></MobileFooter>
        <BackTop />
      </div>
    );
  }
}
