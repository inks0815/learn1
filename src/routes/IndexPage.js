import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import PCIndex from './pc_index';
import MobileIndex from './mobile_index';
import MediaQuery  from 'react-responsive'

function IndexPage() {
  return (
    <div>
        <MediaQuery  query='(min-device-width: 1244px)'>
             <PCIndex />

        </MediaQuery >
        <MediaQuery  query='(max-device-width: 1244px)'>
             <MobileIndex />
        </MediaQuery >
    </div>


  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
