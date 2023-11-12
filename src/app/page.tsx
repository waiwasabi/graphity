import Image from 'next/image'
import DownArrow from '@/components/DownArrow'
import GraphContext from '@/components/GraphContext'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className='flex flex-col'>
        <div id='graph-screen' className='w-screen h-screen bg-slate300 no-select'>
          <div id="d3-graph"></div>
        </div>

        <GraphContext />
      </div>

      <DownArrow />
    </main>
  )
}
