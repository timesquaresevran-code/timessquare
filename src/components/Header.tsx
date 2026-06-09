import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-ts-bg/95 backdrop-blur-md z-50 border-b border-ts-red/20 shadow-lg shadow-ts-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter text-ts-white uppercase">
              TIMES SQUARE <span className="text-ts-red">SEVRAN</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link href="/" className="text-ts-gray hover:text-ts-red transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/menu" className="text-ts-gray hover:text-ts-red transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/contact" className="text-ts-gray hover:text-ts-red transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/ouverture" className="text-ts-gray hover:text-ts-red transition-colors">Horaires</Link>
              </li>
            </ul>
          </nav>

          {/* CTA / Mobile menu button placeholder */}
          <div className="flex items-center">
            <Link href="/menu" className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-ts-red text-base font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred hover:border-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all">
              Commander
            </Link>
            <button className="md:hidden text-ts-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
