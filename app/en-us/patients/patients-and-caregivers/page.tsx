import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patients and Caregivers | BIOTRONIK',
  description: 'Resources and information for patients with BIOTRONIK cardiac devices and their caregivers.',
};

const therapyLinks = [
  { name: 'Pacemakers', href: '/en-us/patients/patients-and-caregivers/therapies/pacemaker', desc: 'Learn about living with a pacemaker', icon: '❤️' },
  { name: 'ICDs', href: '/en-us/patients/patients-and-caregivers/therapies', desc: 'Information about implantable defibrillators', icon: '⚡' },
  { name: 'CRT Devices', href: '/en-us/patients/patients-and-caregivers/therapies/cardiac-resynchronization-therapy', desc: 'Cardiac resynchronization therapy', icon: '💙' },
  { name: 'Cardiac Monitors', href: '/en-us/patients/patients-and-caregivers/therapies', desc: 'Long-term monitoring devices', icon: '📊' },
];

const resources = [
  { name: 'MRI Scans', href: '/en-us/patients/mri-scans', desc: 'MRI safety information for device patients', icon: '🧲' },
  { name: 'Electromagnetic Interference', href: '/en-us/patients/electromagnetic-interference', desc: 'Everyday devices and your cardiac implant', icon: '📡' },
  { name: 'International Implant Card', href: '/en-us/patients/international-implant-card', desc: 'Your device identification card', icon: '💳' },
  { name: 'Info Brochures', href: '/en-us/patients/patients-and-caregivers', desc: 'Downloadable patient education materials', icon: '📄' },
];

export default function PatientsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Patients and Caregivers</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Patients and Caregivers</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Living with a cardiac device can raise many questions. We are here to provide the information
            and support you and your loved ones need.
          </p>
        </div>
      </div>

      {/* Hero message */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You Are Not Alone</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Millions of people around the world live full and active lives with BIOTRONIK cardiac devices.
              Whether you have just received your implant or have been living with one for years, we
              want to make sure you have all the information you need.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our patient resources are developed in collaboration with cardiologists, electrophysiologists,
              and — most importantly — patients like you.
            </p>
            <div className="flex gap-4">
              <Link href="/en-us/patients/patients-and-caregivers/therapies" className="bg-[#003D7A] text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors text-sm">
                My Therapy
              </Link>
              <Link href="/en-us/patients/international-implant-card" className="border border-[#003D7A] text-[#003D7A] px-6 py-3 rounded font-semibold hover:bg-blue-50 transition-colors text-sm">
                My Device ID Card
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
            alt="Patient living actively"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Therapy Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">My Therapy</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {therapyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#003D7A] transition-all text-center group">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#003D7A] transition-colors">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Patient Resources</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {resources.map((item) => (
              <Link key={item.href + item.name} href={item.href} className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#003D7A] mb-2">{item.name}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I use a mobile phone with my cardiac device?',
                a: 'Yes, in general. Modern BIOTRONIK devices are designed to minimize interference. Keep your phone at least 15 cm from your device and use the ear on the opposite side.',
              },
              {
                q: 'Can I travel by plane with my cardiac implant?',
                a: 'Yes. Airport security metal detectors may react to your device. Always carry your implant card and inform security personnel. Ask for a hand-search if preferred.',
              },
              {
                q: 'Can I have an MRI scan with my device?',
                a: 'BIOTRONIK ProMRI devices are MRI-conditional at 1.5T and 3T. Inform your MRI center and cardiologist in advance. They will set your device to MRI mode.',
              },
              {
                q: 'What should I do if I feel the device activate?',
                a: 'If you feel a shock or unusual sensation, sit or lie down and rest. If symptoms persist or you feel unwell, contact your cardiologist or emergency services.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl">
                <summary className="p-5 font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#003D7A]">+</span>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
