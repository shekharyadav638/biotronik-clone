import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MRI Scans | Patients | BIOTRONIK',
  description: 'MRI safety information for patients with BIOTRONIK cardiac devices using ProMRI technology.',
};

export default function MRIPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/patients/patients-and-caregivers" className="hover:text-white">Patients</Link>
            <span className="mx-2">/</span>
            <span>MRI Scans</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">MRI Scans</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            BIOTRONIK ProMRI technology allows most patients to safely undergo MRI scans.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ProMRI Technology</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Traditional pacemakers and ICDs were generally contraindicated for MRI. BIOTRONIK's ProMRI
              technology changes this — allowing eligible patients with ProMRI devices and leads to safely
              undergo MRI scans under specific conditions.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Full-body MRI at 1.5 Tesla and 3 Tesla',
                'No scan exclusion zones with ProMRI leads',
                'Automatic MRI detection — no manual reprogramming needed',
                'Compatible with all major MRI scanners',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" alt="MRI scan" className="w-full h-72 object-cover rounded-xl shadow-lg" />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-bold text-amber-900 mb-3">⚠️ Important: Talk to Your Doctor First</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            Before scheduling an MRI, always inform your cardiologist and the MRI facility that you have
            a cardiac implant. Bring your BIOTRONIK implant card. Your doctor may need to review your
            device settings before and after the scan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Inform Your Doctor', desc: 'Tell your cardiologist you need an MRI. They will confirm your device is ProMRI compatible.' },
            { step: '2', title: 'Contact the MRI Center', desc: 'Inform the MRI center you have a cardiac implant. Bring your implant card to the appointment.' },
            { step: '3', title: 'Scan and Follow Up', desc: 'Your device will automatically adapt for the MRI. A follow-up check may be recommended after.' },
          ].map((s) => (
            <div key={s.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#003D7A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
