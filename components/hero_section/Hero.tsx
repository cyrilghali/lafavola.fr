import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div>
      <div className="min-h-full min-w-full">
          <Image src="/hero-image.jpg"  layout="fill" objectFit="cover" alt=""  className="-z-50"/>
      </div>
          <div className="h-screen min-w-full flex flex-col items-center justify-center">
            <p className="text-7xl font-thin text-yellow-500 italic font-herr">Benvenuto</p>
            <h1 className="text-4xl font-bold py-3">LA FAVOLA</h1>
       </div> 
    </div>
    )
}

export default Hero
