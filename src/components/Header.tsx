import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-ts-bg/70 backdrop-blur-lg z-50 border-b border-ts-red/10 shadow-[0_4px_30px_rgba(0,0,0,0.5),0_1px_5px_rgba(229,9,20,0.05)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-ts-white uppercase group">
              TIMES SQUARE <span className="text-ts-red group-hover:text-ts-white transition-colors duration-300">SEVRAN</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="relative text-ts-gray hover:text-ts-white transition-colors uppercase tracking-widest text-xs font-black py-2 group">
                  Accueil
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ts-red transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/menu" className="relative text-ts-gray hover:text-ts-white transition-colors uppercase tracking-widest text-xs font-black py-2 group">
                  Menu
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ts-red transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative text-ts-gray hover:text-ts-white transition-colors uppercase tracking-widest text-xs font-black py-2 group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ts-red transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/ouverture" className="relative text-ts-gray hover:text-ts-white transition-colors uppercase tracking-widest text-xs font-black py-2 group">
                  Horaires
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ts-red transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA & Mobile toggle */}
          <div className="flex items-center">
            <Link href="/menu" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-ts-red text-sm font-black rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred hover:border-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:scale-105 transform transition-all duration-300 uppercase tracking-widest">
              Commander
            </Link>
            <button className="md:hidden text-ts-white p-2 hover:text-ts-red transition-colors">
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
