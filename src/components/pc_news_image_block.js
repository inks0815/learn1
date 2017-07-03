import React from 'react';
import {Card} from 'antd';
import { Link } from 'dva/router';
import styles from '../css/pc.css'

export default class PCNewsImageBlock extends React.Component {
  constructor() {
         super();
         this.state={
           news:""
         };
  }

  componentWillMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
    .then(response => response.json()).then(json => this.setState({news: json}));

  };
  render(){
    const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styeH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
    const {news} = this.state;
    const newsList = news.length
    ?
    news.map((newsItem,index)=>(
       <div key={index} className={styles.imageblock}>
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                <div className={styles.custom_image}>
                    <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
                </div>
                <div className={styles.custom_card}>
                    <h3 style={styeH3}>{newsItem.title}</h3>
                    <p>{newsItem.author_name}</p>
                </div>

            </Link>
       </div>
    ))
	:"没有加载到任何新闻";
    return(
      <div className={styles.topNewsListimage}>
          <Card>
                 <ul>
		              {newsList}
		         </ul>
          </Card>
      </div>
    );
  }
}
