import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Implantable Cardioverter Defibrillators (ICDs) | BIOTRONIK',
  description: 'BIOTRONIK ICD portfolio: Acticor Sky, Rivacor Sky, and Ilivia 7 for patients at risk of life-threatening arrhythmias.',
};

const icdDevices = [
  {
    name: 'Rivacor Sky VR-T / DR-T',
    tag: 'World First',
    tagColor: 'bg-amber-100 text-amber-800',
    description: 'The world\'s first FDA-approved CRT-D with Left Bundle Branch Pacing (LBBP) capability, offering a new standard in cardiac resynchronization.',
    features: ['Left Bundle Branch Pacing', 'ProMRI Compatible', 'Home Monitoring', 'Wireless Programming', 'Quadripolar Pacing'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
  },
  {
    name: 'Acticor Sky VR-T / DR-T',
    tag: 'Featured',
    tagColor: 'bg-blue-100 text-blue-800',
    description: 'High-energy ICD with comprehensive arrhythmia detection and discrimination algorithms to minimize inappropriate therapies.',
    features: ['SmartDetect Algorithm', 'ProMRI Compatible', 'Extended Longevity', 'Home Monitoring', 'Shock Reduction'],
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop',
  },
  {
    name: 'Ilivia 7 VR-T / DR-T',
    tag: 'Standard',
    tagColor: 'bg-gray-100 text-gray-800',
    description: 'Reliable ICD platform delivering proven therapy for patients with ventricular arrhythmias and sudden cardiac death prevention.',
    features: ['Reliable Detection', 'ProMRI Compatible', 'CLS Rate Adaptation', 'Remote Monitoring', 'Longevity Optimization'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
  },
];

export default function ICDPage() {
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
            <span>Implantable Cardioverter Defibrillators</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Implantable Cardioverter Defibrillators</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            BIOTRONIK ICDs provide life-saving therapy for patients at risk of ventricular arrhythmias,
            with advanced detection algorithms and remote monitoring capabilities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {icdDevices.map((device, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
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

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SmartDetect Algorithm</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            BIOTRONIK\'s proprietary SmartDetect algorithm reduces inappropriate ICD therapy by
            accurately discriminating between ventricular and supraventricular tachycardias,
            improving patient quality of life.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#003D7A] mb-2">98%</div>
              <div className="text-sm text-gray-600">Sensitivity for VT/VF Detection</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#003D7A] mb-2">50%</div>
              <div className="text-sm text-gray-600">Reduction in Inappropriate Shocks</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#003D7A] mb-2">10yr</div>
              <div className="text-sm text-gray-600">Battery Longevity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
