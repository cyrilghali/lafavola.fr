import Image from "next/image"

const files = [
  { source: '/photos/1.jpeg'},
  { source: '/photos/2.jpeg'},
  { source: '/photos/3.jpeg'},
  { source: '/photos/4.jpeg'},
  { source: '/photos/5.jpeg'},
  { source: '/photos/6.jpeg'},
  { source: '/photos/7.jpeg'},
  { source: '/photos/8.jpeg'},
  // More files...
]

export default function Images() {
  return (
    <div className="py-20">
      <h2 className="flex justify-center items-center text-4xl lg:text-5xl font-bold pb-20 text-yellow-400">Gallerie</h2>
      <ul role="list" className="lg:px-20 px-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image src={file.source} layout="fill" alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

