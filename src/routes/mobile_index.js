import React from 'react';
import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';

export default class MobileIndex extends React.Component  {


  render() {

    return(
           <div>
              <MobileHeader></MobileHeader>
              <MobileFooter></MobileFooter>

           </div>
    );

  }
}
