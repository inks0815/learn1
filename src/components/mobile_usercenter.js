import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form , Input ,Button, Checkbox, Modal,Card, notification,Upload} from 'antd';
import logoimg from '../images/TalentD_03.jpg'
import styles from '../css/pc.css'
import { Link } from 'dva/router';
import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane =Tabs.TabPane;
export default class MobileUserCenter extends React.Component  {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
     <div>
       <Icon type="plus" />
       <div className="ant-upload-text">Upload</div>
     </div>
    );
    return(
      <div >
          <MobileHeader></MobileHeader>
          <Tabs>
            <TabPane tab="我的收藏列表" key="1">Content of tab 1</TabPane>
            <TabPane tab="我的评论列表" key="2">Content of tab 2</TabPane>
            <TabPane tab="设置" key="3">
              <div className="clearfix">
                <Upload
                  action="//jsonplaceholder.typicode.com/posts/"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
            </TabPane>
          </Tabs>
          <MobileFooter></MobileFooter>
      </div>
        );
  }
}
