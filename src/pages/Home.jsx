import React from 'react'
import SideBar from '../component/sideBar/SideBar'
import Balance from '../component/bank/Balance'

export default function Home() {
  return (
    <>
        {/* #020811 */}
        <div className='flex bg-[#0F141D]'>
            <SideBar/>
            <Balance/>
        </div>
    </>
  )
}
