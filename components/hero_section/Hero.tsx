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
            <button
            type="button"
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Link href="/menu.pdf">
              Menu
            </Link>
          </button>
        </div> 
    </div>
    )
}

export default Hero
