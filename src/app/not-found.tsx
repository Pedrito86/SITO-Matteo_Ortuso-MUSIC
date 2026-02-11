import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4 text-center space-y-6">
      <h2 className="text-6xl font-bold tracking-tighter text-blue-500">404</h2>
      <p className="text-xl text-neutral-400">Could not find requested resource</p>
      <Link 
        href="/"
        className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-colors rounded-full"
      >
        Return Home
      </Link>
    </div>
  )
}
