import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form , Input ,Button, Checkbox, Modal} from 'antd';
import logoimg from '../images/TalentD_03.jpg'
import logostyles from '../css/pc.css'
import { Link } from 'dva/router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane =Tabs.TabPane;
class PCHeader extends React.Component  {
  constructor(){
    super();
    this.state ={
      current:'top',
      modalVisible:false,
      action:'login',
      hasLogined:false,
      userNickName:'',
      userId:0
    };
  }

  componentWillMount(){
    if(localStorage.userid!=''){
      this.setState({hasLogined:true});
      this.setState({userNickName:localStorage.userNickName,userId:localStorage.userid})
    }
  }
  setModalVisible(value){
     this.setState({modalVisible:value});
  };
  handleClick(e){
    if(e.key=="register"){
      this.setState({current:'register'});
      this.setModalVisible(true);
    }
    else {
      this.setState({current:e.key});
    }
  };
  handleSubmit(e){
    //页面提交
     e.preventDefault();
     var myFetchOptions ={
       method:'GET'
     };
     var forData = this.props.form.getFieldsValue();
     //console.log(forData);
     fetch('http://newsapi.gugujiankong.com/Handler.ashx?action='+this.state.action
     +'&username='+forData.userName+'&password='+forData.password
     +'&r_userName='+forData.r_userName+'&r_password='+forData.r_password+'&r_confirm='+forData.r_confirm,myFetchOptions).
     then(response=>response.json()).then(json=>{

       this.setState({userNickName:json.NickUserName,userid:json.UserId});
       localStorage.userid=json.UserId;
       localStorage.userNickName=json.NickUserName;

     });
     if(this.state.action=="login"){
       this.setState({hasLogined:true});
     }
     message.success("请求成功！");
     this.setModalVisible(false);

  };
  callback(key){
    if(key==1){
        this.setState({action:'login'});
    }
    else if (key==2) {
        this.setState({action:'register'});
    }

  };
  logout(){
    localStorage.userid='';
    localStorage.userNickName='';
    this.setState({hasLogined:false});
  };
  render() {
    let {getFieldDecorator}=this.props.form;
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" className={logostyles.register}>
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
         &nbsp;&nbsp;

        <a href="#/usercenter" target="_blank">
               <Button type="dashed" htmlType="button">个人中心</Button>
        </a>


        <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
    </Menu.Item>
    :
      <Menu.Item key="register" className={logostyles.register}>
          <Icon type="appstore" />注册/登录
      </Menu.Item>;

    return(
      <header>
          <Row>
             <Col span={2}></Col>
             <Col span={4}>
                 <a href="/" className={logostyles.logo}>
                     <img src={logoimg} alt="logo" />
                     <span>ReactNews</span>
                 </a>
             </Col>
             <Col span={16}>
                 <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                      <Menu.Item key="top">
                          <Link to={``}>
                             <Icon type="appstore" />头条
                           </Link>
                      </Menu.Item>
                      <Menu.Item key="shehui">
                          <Link to={`shehui`}>
                          <Icon type="appstore" />
                              社会
                           </Link>
                      </Menu.Item>
                      <Menu.Item key="guonei"><Icon type="appstore" />国内</Menu.Item>
                      <Menu.Item key="guoji"><Icon type="appstore" />国际</Menu.Item>
                      <Menu.Item key="yule"><Icon type="appstore" />娱乐</Menu.Item>
                      <Menu.Item key="tiyu"><Icon type="appstore" />体育</Menu.Item>
                      <Menu.Item key="keji"><Icon type="appstore" />科技</Menu.Item>

                       {userShow}
                 </Menu>

             </Col>
             <Modal title="用户中心" wrapClassName="vertical-center-modal"
                                    visible={this.state.modalVisible}
                                    onOk={()=>this.setModalVisible(false)}
                                    onCancel={()=>this.setModalVisible(false)}
                                    okText="确认"
                                    cancelText="取消">

                 <Tabs type="card" onChange={this.callback.bind(this)}>
                   <TabPane tab="登录" key="1">
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                           <FormItem label="账户">
                           {getFieldDecorator('userName')(
                                <Input placeholder="请输入您的账号"/>
                              )}

                           </FormItem>
                           <FormItem label="密码">
                              {getFieldDecorator('password')(<Input type="password" placeholder="密码" />)}

                           </FormItem>

                           <Button type="primary" htmlType="submit">登录</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                       <Form onSubmit={this.handleSubmit.bind(this)}>
                          <FormItem label="账户">
                          {getFieldDecorator('r_userName')(
                               <Input placeholder="请输入您的账号"/>
                             )}

                          </FormItem>
                          <FormItem label="密码">
                             {getFieldDecorator('r_password')(<Input type="password" placeholder="密码" />)}

                          </FormItem>
                          <FormItem label="确认密码">
                             {getFieldDecorator('r_confirm')(<Input type="password" placeholder="确认密码" />)}

                          </FormItem>
                          <Button type="primary" htmlType="submit">注册</Button>
                       </Form>
                    </TabPane>
                 </Tabs>
             </Modal>

          </Row>
      </header>
    );

  };
}
export default PCHeader = Form.create({})(PCHeader);
