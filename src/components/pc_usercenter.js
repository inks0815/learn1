import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form , Input ,Button, Checkbox, Modal,Card, notification} from 'antd';
import logoimg from '../images/TalentD_03.jpg'
import styles from '../css/pc.css'
import { Link } from 'dva/router';
import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane =Tabs.TabPane;
export default class PCUserCenter extends React.Component  {
  render() {
    return(
      <div >
          <PCHeader></PCHeader>
          <Tabs className={styles.container}>
            <TabPane tab="我的收藏列表" key="1">Content of tab 1</TabPane>
            <TabPane tab="我的评论列表" key="2">Content of tab 2</TabPane>
            <TabPane tab="设置" key="3">Content of tab 3</TabPane>
          </Tabs>
          <PCFooter></PCFooter>
      </div>
        );
  }
}
