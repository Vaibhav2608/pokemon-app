import Link from 'next/link';

export default function Breadcrumb({ name }: { name: string }) {
  return (
    <nav className="text-sm mb-4 text-left">
      <Link href="/" className="text-[#1CC8A7]">
        &lt; Home
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      <span className="capitalize text-gray-500">{name}</span>
    </nav>
  );
}
