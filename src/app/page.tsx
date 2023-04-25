import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '@/components/ui/Paragraph'
import LargeHeading from '@/components/ui/LargeHeading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <LargeHeading size="default" >
        hello world
      </LargeHeading>
      <Paragraph size="sm" className='bg-red-500'>Some text</Paragraph>
     </div>
    </main>
  )
}
