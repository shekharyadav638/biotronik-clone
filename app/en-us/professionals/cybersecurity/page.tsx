import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity | Professionals | BIOTRONIK',
  description: 'BIOTRONIK cybersecurity information for connected cardiac devices and Home Monitoring.',
};

export default function CybersecurityPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/professionals" className="hover:text-white">Professionals</Link>
            <span className="mx-2">/</span>
            <span>Cybersecurity</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Cybersecurity</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            BIOTRONIK is committed to the security of connected medical devices and patient data.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Commitment</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As connected medical devices become increasingly central to patient care, cybersecurity
              is a critical responsibility. BIOTRONIK implements comprehensive security measures across
              our device ecosystem — from implanted hardware to cloud-based monitoring platforms.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We follow established medical device cybersecurity guidance including FDA pre- and
              post-market recommendations, ISO/IEC standards, and work with independent security
              researchers to continuously improve our security posture.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🔐', title: 'Encrypted Transmission', desc: 'All device-to-cloud data is encrypted in transit and at rest' },
              { icon: '🛡️', title: 'Access Controls', desc: 'Role-based access to patient data and device programming' },
              { icon: '🔍', title: 'Vulnerability Management', desc: 'Coordinated disclosure program with security researchers' },
              { icon: '📋', title: 'Regulatory Compliance', desc: 'FDA guidance and ISO/IEC 81001-5-1 compliance' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
