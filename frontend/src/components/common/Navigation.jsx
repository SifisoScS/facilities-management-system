import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex space-x-6">
      <Link href="/strategic-intelligence" className="hover:text-blue-300 transition-colors">
        Strategic Intelligence
      </Link>
      <Link href="/derivco-facilities" className="hover:text-blue-300 transition-colors">
        Facilities Management
      </Link>
      <Link href="/service-providers" className="hover:text-blue-300 transition-colors">
        Service Providers
      </Link>
    </nav>
  );
}