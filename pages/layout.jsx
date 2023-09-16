import { Header, Footer } from '@/components'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen bg-white text-black md:px-20 lg:py-2'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout