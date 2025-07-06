import Link from 'next/link'

export default function Navbar() {
  const navItems = [
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#reviews', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-[#252525]/80 backdrop-blur fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-yellow-400">La Favola</h1>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} legacyBehavior>
                <a className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
