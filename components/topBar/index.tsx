import React from 'react'
import TopBarTime from './TopBarTime'

export default function TopBar() {
    return (
        <header className='w-full h-[30px] px-4 flex justify-between bg-white/20 backdrop-blur-xl'>
            <div></div>
           <TopBarTime /> 
        </header>
    )
}
