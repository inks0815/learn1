import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form , Input ,Button, Checkbox, Modal,Card, notification,Upload} from 'antd';
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

  state = {
    usercollect:'',
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  componentWillMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=1", myFetchOptions)
    .then(response => response.json()).then(json => this.setState({usercollect: json}));

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

   let {usercollect}=this.state;
   let ucList = usercollect.length?
   usercollect.map((uc,index)=>(
     <Card key={index} title={uc.title} extra={<Link to={`details/${uc.uniquekey}`} >查看</Link>} >
       <p>{uc.Title}</p>
     </Card>
   ))
   :
   '没有任何评论';
    return(
      <div>
          <PCHeader></PCHeader>
          <div style={{ width: '80%',margin:'0 auto'}}>
              <Tabs >
                <TabPane tab="我的收藏列表" key="1">{ucList}</TabPane>
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
          </div>
          <PCFooter></PCFooter>
      </div>
        );
  }
}
