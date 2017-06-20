import React from 'react';
import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';

export default class PCIndex extends React.Component  {


  render() {

    return(
           <div>
              <PCHeader></PCHeader>
              <PCFooter></PCFooter>
           </div>
    );

  }
}
