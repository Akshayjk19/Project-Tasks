import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div>
    <Navbar/>
    <main style={{height:'80vh'}}>
    {children}
    </main>
    </div>
  )
}

export default Layout