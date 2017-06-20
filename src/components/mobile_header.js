import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
import logoimg from '../images/TalentD_03.jpg'
import mobilestyles from '../css/mobile.css'
export default class MobileHeader extends React.Component  {
  constructor(){
    super();
    this.state ={
      current:'top'
    };
  }

  render() {

    return(
      <div id="mobile" className={mobilestyles.mobile}>
          <header>
                     <a href="/">
                         <img src={logoimg} alt="logo" />
                         <span>ReactNews</span>
                     </a>
          </header>
      </div>
    );

  }
}
