import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Implantable Cardiac Monitors | BIOTRONIK',
  description: 'BIOTRONIK BIOMONITOR IV and III — long-term cardiac monitoring for arrhythmia detection.',
};

export default function ICMPage() {
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
            <span>Implantable Cardiac Monitors</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Implantable Cardiac Monitors</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Long-term continuous cardiac monitoring for patients with unexplained syncope, palpitations,
            cryptogenic stroke, or atrial fibrillation screening.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img src="https://images.unsplash.com/photo-1581093196867-ca7e74d6f0a0?w=600&h=400&fit=crop" alt="BIOMONITOR IV" className="w-full h-64 object-cover rounded-xl shadow-lg mb-6" />
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">NEW</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-3">BIOMONITOR IV</h2>
            <p className="text-gray-600 mb-4">
              The fourth generation of BIOTRONIK's implantable cardiac monitors. The BIOMONITOR IV
              features the smallest form factor yet, extended battery life, and enhanced AF detection
              algorithms with daily automatic transmissions.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Smallest form factor in class',
                'Up to 4+ year battery life',
                'Advanced AF detection',
                'Daily automatic Home Monitoring transmissions',
                'MRI conditional at 1.5T',
                'Subcutaneous injection delivery',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" alt="Home Monitoring" className="w-full h-64 object-cover rounded-xl shadow-lg mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">BIOTRONIK Home Monitoring</h2>
            <p className="text-gray-600 mb-4">
              All BIOTRONIK ICMs transmit data daily through the CardioMessenger Smart device to
              the BIOTRONIK Home Monitoring service center. Physicians receive alerts for clinically
              relevant events, enabling proactive patient management.
            </p>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-[#003D7A] mb-3">Home Monitoring Benefits</h3>
              <ul className="space-y-2">
                {[
                  'Daily automatic data transmission',
                  'Early detection of clinical events',
                  'Reduced unnecessary office visits',
                  'Secure encrypted data transfer',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#003D7A] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Indications</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: '💫', title: 'Unexplained Syncope', desc: 'Identify arrhythmic causes of fainting episodes' },
              { icon: '🫀', title: 'Cryptogenic Stroke', desc: 'Detect AF in stroke patients with no clear cause' },
              { icon: '⚡', title: 'Palpitations', desc: 'Correlate symptoms with cardiac rhythm disturbances' },
              { icon: '🔍', title: 'AF Screening', desc: 'Long-term monitoring for atrial fibrillation burden' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
