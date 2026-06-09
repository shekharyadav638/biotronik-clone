import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Professionals | BIOTRONIK',
  description: 'Technical library, manuals, software, and professional resources for BIOTRONIK devices.',
};

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/professionals" className="hover:text-white">Professionals</Link>
            <span className="mx-2">/</span>
            <span>Resources</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Professional Resources</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Technical manuals, programmer software, educational content, and service resources.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '📖', title: 'Technical Library', desc: 'Device manuals, technical guides, and product specifications for all BIOTRONIK devices.' },
            { icon: '💻', title: 'Programmer Software', desc: 'Download the latest software updates for BIOTRONIK programmers (requires login).' },
            { icon: '🔎', title: 'Device Lookup', desc: 'Search for device details, leads, and accessories using model or serial number.' },
            { icon: '📢', title: 'Product Advisories', desc: 'Field safety notices and important safety information for implanted devices.' },
            { icon: '🎓', title: 'CRM Education', desc: 'Basics & Beyond online learning modules for cardiac rhythm management.' },
            { icon: '📞', title: 'Technical Support', desc: 'Contact BIOTRONIK technical support for device-related clinical questions.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <button className="text-[#003D7A] text-sm font-semibold hover:underline">Access →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
