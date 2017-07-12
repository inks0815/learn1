import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form , Input ,Button, Checkbox, Modal,Card, notification} from 'antd';
import logoimg from '../images/TalentD_03.jpg'
import logostyles from '../css/pc.css'
import { Link } from 'dva/router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane =Tabs.TabPane;
class CommonComments extends React.Component  {
  constructor() {
     super();
     this.state={
       comments:""
     };
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({comments: json}));

  }

  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions ={
      method:'GET'
    };
    var forData = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&commnet=" + forData.remark, myFetchOptions)
    .then(response => response.json())
    .then(json => {this.componentDidMount()});
  };

  addUserCollection(){
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+ this.props.uniquekey, myFetchOptions)
    .then(response => response.json())
    .then(
      json =>{
        if(json){
          //收藏文章发起全局提醒
            notification.success({
                message: '收藏成功'
                })
        }else{
            notification.open({
              message: '收藏失败'
              })
        }

      }
    );

  }

  render(){
    let {getFieldDecorator}=this.props.form;
    let {comments}=this.state;
    let commentList = comments.length?
    comments.map((commentItem,index)=>(
      <Card key={index} title={commentItem.title} extra={<a href="#">发布于 {commentItem.datetime}</a>} >
        <p>{commentItem.Comments}</p>
      </Card>
    ))
    :
    '没有任何评论';
    return(
      <div>
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
               <FormItem label="您的评论">
               {getFieldDecorator('remark',{initalValue:''})(
                    <Input type="textarea" placeholder="请输入您的评论"/>
                  )}

               </FormItem>

               <Button type="primary" htmlType="submit">提交评论</Button>
                <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏文章</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommonComments = Form.create({})(CommonComments);
