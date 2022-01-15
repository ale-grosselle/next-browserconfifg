import React from 'react';
import Header from "./Header";

// @ts-ignore
function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Layout