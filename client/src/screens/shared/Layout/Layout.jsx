import React from 'react';
import Header from '../Header/Header';
import "./Layout.css"

function Layout(props) {
  const { visible } = props
  return (
    <div className='layout'>
      <Header visible={visible}/>
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;