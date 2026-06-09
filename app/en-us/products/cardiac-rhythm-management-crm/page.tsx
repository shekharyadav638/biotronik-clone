import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cardiac Rhythm Management (CRM) | BIOTRONIK',
  description: 'BIOTRONIK\'s complete CRM portfolio including pacemakers, ICDs, CRT systems, and remote monitoring.',
};

const crmProducts = [
  {
    name: 'Pacing Systems',
    description: 'Advanced pacemakers including the Amvia Sky family with ProMRI technology and Left Bundle Branch Pacing (LBBP) support.',
    href: '/en-us/products/cardiac-rhythm-management-crm/pacing-systems',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop',
    products: ['Amvia Sky DR-T / SR-T', 'Amvia Edge DR-T / SR-T', 'Edora 8 DR-T / SR-T'],
  },
  {
    name: 'Implantable Cardioverter Defibrillators',
    description: 'ICDs designed to detect and treat life-threatening arrhythmias with advanced therapies and remote monitoring.',
    href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardioverter-defibrillators',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    products: ['Acticor Sky VR-T / DR-T', 'Rivacor Sky VR-T / DR-T', 'Ilivia 7 VR-T / DR-T'],
  },
  {
    name: 'Cardiac Resynchronization Therapy',
    description: 'CRT-P and CRT-D devices for heart failure patients, including the world\'s first FDA-approved LBBP-CRT devices.',
    href: '/en-us/products/cardiac-rhythm-management-crm/cardiac-resynchronization-therapy',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
    products: ['Rivacor Sky HF-T QP', 'Acticor Sky HF-T', 'Amvia Sky HF-T QP'],
  },
  {
    name: 'Implantable Cardiac Monitors',
    description: 'Long-term cardiac monitoring for detecting arrhythmias in patients with unexplained syncope or stroke risk.',
    href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardiac-monitors',
    image: 'https://images.unsplash.com/photo-1581093196867-ca7e74d6f0a0?w=400&h=300&fit=crop',
    products: ['BIOMONITOR IV', 'BIOMONITOR III', 'CardioMessenger Smart'],
  },
];

const technologies = [
  {
    name: 'ProMRI',
    icon: '🧲',
    description: 'MRI-conditional device technology allowing patients to safely undergo MRI scans.',
  },
  {
    name: 'Closed Loop Stimulation (CLS)',
    icon: '❤️',
    description: 'Unique rate adaptive pacing that responds to the body\'s own physiological signals.',
  },
  {
    name: 'Left Bundle Branch Pacing (LBBP)',
    icon: '⚡',
    description: 'Revolutionary pacing technique delivering more physiological ventricular activation.',
  },
  {
    name: 'Home Monitoring',
    icon: '📡',
    description: 'Automatic daily transmissions for proactive patient management from any location.',
  },
];

export default function CRMPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span>Cardiac Rhythm Management</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Cardiac Rhythm Management</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            A complete portfolio of devices and digital health solutions for patients with arrhythmias,
            heart failure, and those requiring long-term cardiac monitoring.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Product Lines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {crmProducts.map((product, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Featured Products:</p>
                  <ul className="space-y-1">
                    {product.products.map((p, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#003D7A] rounded-full flex-shrink-0"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={product.href} className="text-[#003D7A] font-semibold text-sm hover:underline inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Technologies */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Unique Technologies</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
