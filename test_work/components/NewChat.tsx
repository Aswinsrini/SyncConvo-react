import { PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'

const NewChat = () => {
  return (
    <div className='mt-2 border border-emerald-500 text-emerald-500 new-chat'>
        <PlusIcon className='w-4 h-4'/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat