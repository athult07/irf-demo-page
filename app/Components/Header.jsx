import { Logo } from '@/public/assets/images'
import React from 'react'


const Header = () => {
  return (
    <div className='bg-white shadow-md z-50 sticky top-0 flex justify-between items-center px-4 '>
        <Logo/>
    </div>
  )
}

export default Header