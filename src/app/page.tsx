import Image from 'next/image'
import Toolbar from '../components/Toolbar'
import CodeInput from '@/components/CodeInput'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toolbar />

      <div className='flex flex-col'>
        <div className='w-screen h-screen bg-slate300'>
          
        </div>
        <div className='text-center'>
          <CodeInput />
        </div>
      </div>
    </main>
  )
}
