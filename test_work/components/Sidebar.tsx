import React from 'react'
import NewChat from './NewChat'

const Sidebar = () => {
  return (
    <div className='p-2 flex flex-col min-h-screen'>
        <NewChat/>
        {/* Chat row */}
    </div>
  )
}
export default Sidebar