import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logos/derivco-logo.png"
            alt="Derivco Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-2xl font-bold">Derivco Facilities</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
}