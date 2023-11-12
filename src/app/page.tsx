import D3Graph from '@/components/D3Graph'
import D3Graph from '@/components/D3Graph'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import CodeInput from '@/components/CodeInput'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toolbar />

      <div className='flex flex-col'>
        <div id='graph-screen' className='w-screen h-screen bg-slate300 no-select'>
      <D3Graph />
      <div id="d3-graph"></div>
        </div>

        <div className='text-center'>
          <CodeInput />
        </div>
      </div>
    </main>
  )
}
