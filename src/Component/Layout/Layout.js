import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from '../sidebar/sidebar'


function Layout(props) {
  const { header = true, footer = true, children } = props
  return (
    <Box >
      {header && <Header />}
      <div className="flex justify-between py-2" >
        <div className='w-[18%] lg:block hidden' ><Sidebar /></div>
        <div className='lg:w-[82%]'>{children}</div>
      </div>
      {footer && <Footer />}
    </Box>
  )
}

export default Layout

