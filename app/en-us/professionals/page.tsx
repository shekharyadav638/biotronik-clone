import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professionals | BIOTRONIK',
  description: 'Resources for healthcare professionals including clinical studies, technical library, and educational materials.',
};

const professionalLinks = [
  { title: 'Clinical Studies', desc: 'Browse BIOTRONIK-sponsored and independent clinical evidence.', href: '/en-us/professionals/clinical-studies', icon: '🔬' },
  { title: 'Resources', desc: 'Technical library, manuals, and software downloads.', href: '/en-us/professionals/resources', icon: '📚' },
  { title: 'Cybersecurity', desc: 'Security information for BIOTRONIK connected devices.', href: '/en-us/professionals/cybersecurity', icon: '🔒' },
  { title: 'Home Monitoring', desc: 'Remote patient monitoring service and support.', href: '/en-us/professionals', icon: '📡' },
];

export default function ProfessionalsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Professionals</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">For Healthcare Professionals</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Access clinical evidence, technical resources, educational materials, and support services
            designed specifically for cardiac and pain specialists.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {professionalLinks.map((item) => (
            <Link key={item.href+item.title} href={item.href} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#003D7A] transition-all group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#003D7A] transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Basics &amp; Beyond</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BIOTRONIK's Basics &amp; Beyond is a comprehensive educational program for cardiac electrophysiology
                professionals. From foundational concepts to advanced pacing techniques including LBBP,
                our educational content supports your continuing professional development.
              </p>
              <Link href="/en-us/professionals" className="bg-[#003D7A] text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors inline-block text-sm">
                Explore Educational Resources
              </Link>
            </div>
            <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop" alt="Medical education" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Product Advisories', desc: 'Safety notices and field safety corrective actions for BIOTRONIK products.', count: '12 Active' },
            { title: 'Events & Conferences', desc: 'Meet BIOTRONIK at upcoming cardiology congresses and symposia.', count: 'EHRA 2026' },
            { title: 'Clinical Grants', desc: 'Apply for BIOTRONIK investigator-initiated grant funding for clinical research.', count: 'Open' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <span className="text-xs bg-blue-100 text-[#003D7A] px-2 py-1 rounded-full font-semibold">{item.count}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <Link href="/en-us/professionals" className="text-[#003D7A] text-sm font-semibold hover:underline">
                View details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
