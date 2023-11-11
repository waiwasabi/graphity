import D3Graph from '@/components/D3Graph'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      
      <D3Graph />
      <div id="d3-graph"></div>
    </main>
  )
}
