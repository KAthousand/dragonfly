import React from 'react';
import Header from '../Header/Header';
import "./Layout.css"

function Layout(props) {
  const { visibleTitle } = props
  return (
    <div className='layout'>
      <Header visibleTitle={visibleTitle}/>
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;