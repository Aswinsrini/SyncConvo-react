import ChatInput from "@/components/ChatInput"
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/20/solid"

export default function HomePage() {
  return (
<div className="min-h-screen">
    <div className="flex flex-col items-center text-white mt-32 mb-36">
      <h2 className='font-bold text-4xl mb-16'>
        ChatGpt
      </h2>
      <div className="flex space-x-2">
      <div className="flex flex-col items-center justify-center">
        
        <div className="flex items-center justify-center">
          <SunIcon className="w-5 h-5"/>
          <h2>Examples</h2>
        </div>
        <div className="mt-2 space-y-2">
          <p className="info-text">Explain Something to me</p>
          <p className="info-text">Explain Something to me</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <BoltIcon className="w-5 h-5"/>
          <h2>Examples</h2>
        </div>
        <div className="mt-2 space-y-2">
          <p className="info-text">Explain Something to me</p>
          <p className="info-text">Explain Something to me</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <ExclamationTriangleIcon className="w-5 h-5"/>
          <h2>Examples</h2>
        </div>
        <div className="mt-2 space-y-2">
          <p className="info-text">Explain Something to me</p>
          <p className="info-text">Explain Something to me</p>
        </div>
      </div>
      </div>
    </div>
      <ChatInput/>
      </div>
  )
}
