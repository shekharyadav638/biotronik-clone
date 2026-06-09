import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pacing Systems | Cardiac Rhythm Management | BIOTRONIK',
  description: 'BIOTRONIK pacemakers including Amvia Sky, Amvia Edge, and Edora 8 with ProMRI and Left Bundle Branch Pacing technology.',
};

const pacingDevices = [
  {
    name: 'Amvia Sky DR-T / SR-T',
    tag: 'New',
    tagColor: 'bg-green-100 text-green-800',
    description: 'The latest generation pacemaker with advanced LBBP support and enhanced ProMRI technology for the best patient outcomes.',
    features: ['ProMRI Compatible', 'Left Bundle Branch Pacing', 'Closed Loop Stimulation', 'Home Monitoring', 'MR-conditional'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop',
  },
  {
    name: 'Amvia Edge DR-T / SR-T',
    tag: 'Featured',
    tagColor: 'bg-blue-100 text-blue-800',
    description: 'High-performance pacemaker combining exceptional longevity with comprehensive sensing and therapy options.',
    features: ['Extended Battery Life', 'ProMRI Compatible', 'Closed Loop Stimulation', 'Remote Programming', 'Automatic Diagnostics'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    name: 'Edora 8 DR-T / SR-T',
    tag: 'Reliable',
    tagColor: 'bg-gray-100 text-gray-800',
    description: 'Proven pacemaker platform delivering reliable pacing therapy with essential features for routine pacing indications.',
    features: ['ProMRI Compatible', 'Auto Sensing', 'Closed Loop Stimulation', 'Home Monitoring', 'Long Longevity'],
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop',
  },
];

export default function PacingSystemsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/products/cardiac-rhythm-management-crm" className="hover:text-white">CRM</Link>
            <span className="mx-2">/</span>
            <span>Pacing Systems</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Pacing Systems</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            BIOTRONIK pacemakers offer industry-leading longevity, MRI compatibility with ProMRI technology,
            and the unique Closed Loop Stimulation feature for physiological rate adaptation.
          </p>
        </div>
      </div>

      {/* Devices */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {pacingDevices.map((device, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? '' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <img src={device.image} alt={device.name} className="w-full h-72 object-cover rounded-xl shadow-lg" />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{device.name}</h2>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${device.tagColor}`}>{device.tag}</span>
                </div>
                <p className="text-gray-600 mb-6">{device.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Key Features</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {device.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button className="bg-[#003D7A] text-white px-6 py-2.5 rounded font-semibold hover:bg-blue-800 transition-colors text-sm">
                    Request Information
                  </button>
                  <button className="border border-[#003D7A] text-[#003D7A] px-6 py-2.5 rounded font-semibold hover:bg-blue-50 transition-colors text-sm">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ProMRI Section */}
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">ProMRI Technology</h2>
            <p className="text-blue-200 mb-6 leading-relaxed">
              All BIOTRONIK pacemakers feature ProMRI technology, allowing patients to safely undergo
              full-body MRI scans at 1.5 and 3 Tesla under specific conditions. This eliminates
              barriers to essential diagnostic imaging for device patients.
            </p>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full-body MRI access at 1.5T and 3T
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No scan exclusion zones (all BIOTRONIK ProMRI leads)
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automatic MRI detection without manual programming
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8">
              <div className="text-6xl font-bold text-white mb-2">3T</div>
              <div className="text-blue-200 text-lg">MRI Field Strength</div>
              <div className="mt-6 text-4xl font-bold text-white">1.5T</div>
              <div className="text-blue-200">Also Supported</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Contact our clinical team or visit our patient resources to understand how BIOTRONIK pacemakers can help.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/en-us/professionals/clinical-studies" className="bg-[#003D7A] text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors">
            Clinical Studies
          </Link>
          <Link href="/en-us/patients/patients-and-caregivers/therapies/pacemaker" className="border-2 border-[#003D7A] text-[#003D7A] px-8 py-3 rounded font-semibold hover:bg-[#003D7A] hover:text-white transition-colors">
            Patient Information
          </Link>
        </div>
      </div>
    </div>
  );
}
