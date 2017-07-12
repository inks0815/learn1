import React from 'react';
import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';
import {Row, Col, BackTop} from 'antd';
import styles from '../css/pc.css';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments'
export default class PCNewsDetails extends React.Component {
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
        <PCHeader></PCHeader>

        <Row>
          <Col span={2}></Col>
          <Col span={14} className={styles.container}>
            <div className={styles.articleContainer} dangerouslySetInnerHTML={this.createMarkup()}></div>
            <CommonComments  uniquekey={this.props.params.uniquekey}></CommonComments>
          </Col>
          <Col span={6}>
            <PCNewsImageBlock count={40} type="top" width="100%" cartTitle="其他相关新闻" imageWidth="112px"/>
          </Col>
          <Col span={2}></Col>
        </Row>

        <PCFooter></PCFooter>
        <BackTop />
      </div>
    );
  }
}
