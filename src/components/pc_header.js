import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form , Input ,Button, Checkbox, Modal} from 'antd';
import logoimg from '../images/TalentD_03.jpg';
import logostyles from '../css/pc.css';
import 'whatwg-fetch';
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
  setModalVisible(value){
     this.setState({modalVisible:value});
  };
  handleClick(e){
    if(e.key="register"){
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
     console.log(forData);
     fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName='+forData.r_userName+'&r_password='+forData.r_password+'&r_confirm='+forData.r_confirm,myFetchOptions).
     then(function(response) {
              return response.json()
            }).then(json={



     });
     message.success("请求成功！");
     this.setModalVisible(false);

  };
  render() {
    let {getFieldProps}=this.props.form;
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" className="">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
         &nbsp;&nbsp;
        <Link target="_blank">
            <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    :
      <Menu.Item key="register" className="">
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
                      <Menu.Item key="top"><Icon type="appstore" />头条</Menu.Item>
                      <Menu.Item key="shehui"><Icon type="appstore" />社会</Menu.Item>
                      <Menu.Item key="guonei"><Icon type="appstore" />国内</Menu.Item>
                      <Menu.Item key="guoji"><Icon type="appstore" />国际</Menu.Item>
                      <Menu.Item key="yule"><Icon type="appstore" />娱乐</Menu.Item>
                      <Menu.Item key="tiyu"><Icon type="appstore" />体育</Menu.Item>
                      <Menu.Item key="keji"><Icon type="appstore" />科技</Menu.Item>
                      <Menu.Item key="shishang"><Icon type="appstore" />时尚</Menu.Item>
                       {userShow}
                 </Menu>

             </Col>
             <Modal title="用户中心" wrapClassName="vertical-center-modal"
                                    visible={this.state.modalVisible}
                                    onOk={()=>this.setModalVisible(false)}
                                    onCancel={()=>this.setModalVisible(false)}
                                    okText="确认"
                                    cancelText="取消">

                 <Tabs type="card">
                    <TabPane tab="注册" key="2">
                       <Form onSubmit={this.handleSubmit.bind(this)}>
                          <FormItem label="账户">
                             <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                          </FormItem >
                          <FormItem label="密码">
                             <Input type="password" placeholder="密码" {...getFieldProps('r_password')}/>
                          </FormItem >
                          <FormItem label="确认密码">
                             <Input type="password" placeholder="确认密码" {...getFieldProps('r_confirm')}/>
                          </FormItem >
                          <Button type="primary" htmlType="submit">注册</Button>
                       </Form>
                    </TabPane>
                 </Tabs>
             </Modal>
             <Col span={2}></Col>
          </Row>
      </header>
    );

  };
}
export default PCHeader = Form.create({})(PCHeader);
