import React from 'react';
import Header from '../Header/Header';
import "./Layout.css"

function Layout(props) {
  return (
    <div className='layout'>
      <Header />
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;