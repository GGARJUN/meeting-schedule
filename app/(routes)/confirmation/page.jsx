import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Confirmation() {
  return (
    <div className='flex flex-col items-center justify-center gap-6
    p-20'>
      <div>
      <Image src="/Logo.png" alt="logo" width={150} height={150} />
      </div>
        <CheckCircle className='h-9 w-9 text-green-500'/>
        <h2 className='font-bold text-3xl'>Your meeting scheduled successfully!</h2>
        <h2 className='text-lg text-gray-500'>Confirmation sent on your email</h2>
        <Link href={'/dashboard'}><Button>Thank you</Button></Link> 

    </div>
  )
}

export default Confirmation