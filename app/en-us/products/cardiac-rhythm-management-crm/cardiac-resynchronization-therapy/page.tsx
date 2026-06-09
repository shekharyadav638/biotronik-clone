import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cardiac Resynchronization Therapy (CRT) | BIOTRONIK',
  description: 'BIOTRONIK CRT-P and CRT-D devices for heart failure patients, including world-first LBBP-CRT technology.',
};

export default function CRTPage() {
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
            <span>Cardiac Resynchronization Therapy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Cardiac Resynchronization Therapy</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            CRT systems for heart failure patients requiring biventricular or conduction system pacing,
            including the world's first FDA-approved CRT with Left Bundle Branch Pacing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=300&fit=crop" alt="CRT-D" className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">CRT-D</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2">Rivacor Sky HF-T QP</h2>
              <p className="text-gray-600 mb-4 text-sm">
                World's first FDA-approved CRT-D device with Left Bundle Branch Pacing (LBBP) capability,
                combining defibrillation with physiological resynchronization.
              </p>
              <ul className="space-y-2 mb-6">
                {['LBBP-CRT Capability', 'Quadripolar Pacing', 'ProMRI Compatible', 'Home Monitoring', 'SmartDetect Algorithm'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="bg-[#003D7A] text-white px-6 py-2.5 rounded font-semibold hover:bg-blue-800 transition-colors text-sm w-full">
                Request Information
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=300&fit=crop" alt="CRT-P" className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">CRT-P</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2">Amvia Sky HF-T QP</h2>
              <p className="text-gray-600 mb-4 text-sm">
                The Amvia Sky HF-T QP is a CRT pacemaker designed for patients with heart failure
                who do not require ICD therapy. Features quadripolar left ventricular pacing.
              </p>
              <ul className="space-y-2 mb-6">
                {['Quadripolar LV Pacing', 'ProMRI Compatible', 'CLS Rate Adaptation', 'Home Monitoring', 'Extended Longevity'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="bg-[#003D7A] text-white px-6 py-2.5 rounded font-semibold hover:bg-blue-800 transition-colors text-sm w-full">
                Request Information
              </button>
            </div>
          </div>
        </div>

        {/* LBBP Explainer */}
        <div className="bg-[#003D7A] text-white rounded-2xl p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">World First</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">Left Bundle Branch Pacing</h2>
              <p className="text-blue-200 mb-6 leading-relaxed">
                LBBP is a revolutionary pacing technique that delivers electrical stimulation directly to the
                left bundle branch, achieving more physiological ventricular activation compared to traditional
                biventricular pacing. BIOTRONIK was the first manufacturer to receive FDA approval for a
                CRT device with LBBP capability.
              </p>
              <ul className="space-y-3 text-blue-100">
                {[
                  'More physiological activation pattern',
                  'Excellent electrical synchrony',
                  'Fewer lead-related complications than BiV',
                  'FDA approved — first in class',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-xl p-8">
                <div className="text-6xl mb-4">⚡</div>
                <div className="text-2xl font-bold text-white mb-2">LBBP-CRT</div>
                <div className="text-blue-200 text-sm">Conduction System Pacing for Heart Failure</div>
                <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                  <div className="text-sm text-blue-200">FDA Approved • World First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
