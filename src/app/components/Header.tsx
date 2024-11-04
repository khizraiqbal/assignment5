import React from 'react'
import {Rye} from '@next/font/google'

const rye = Rye({
  weight: ['400'], // Rye only has one weight available
  subsets: ['latin'], // Choose the subset that works for you
});

function Header() {
  return (
    <div className='h-[134px]  bg-[#A29875]

'> 
<h1 className={`${rye.className} font-extrabold text-[#ffff]  text-[75px] absolute top-[20px] left-[36px]`}>MANZZARI </h1> </div>
  )
}

export default Header