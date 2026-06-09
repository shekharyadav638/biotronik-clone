import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pacemaker Therapy | Patients | BIOTRONIK',
  description: 'Patient information about living with a BIOTRONIK pacemaker - activities, MRI, travel, and daily life.',
};

export default function PacemakerPatientPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/patients/patients-and-caregivers" className="hover:text-white">Patients</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/patients/patients-and-caregivers/therapies" className="hover:text-white">Therapies</Link>
            <span className="mx-2">/</span>
            <span>Pacemaker</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Living with a Pacemaker</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            A pacemaker can help you live a full, active life. Here is what you need to know.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Pacemaker?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A pacemaker is a small, battery-powered device implanted under your skin, usually below
              your collarbone. It monitors your heart's rhythm and sends electrical pulses to make your
              heart beat at a normal rate when it detects it is beating too slowly.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              BIOTRONIK pacemakers are designed to be reliable, long-lasting, and compatible with MRI scans
              using our ProMRI technology. Most patients experience significant improvement in symptoms
              such as fatigue, dizziness, and shortness of breath after implantation.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop" alt="Active patient" className="w-full h-72 object-cover rounded-xl shadow-lg" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '🏃', title: 'Physical Activity', desc: 'Most patients can return to normal activities within a few weeks. Exercise is encouraged — your device will adapt to your activity level with Closed Loop Stimulation technology.' },
            { icon: '✈️', title: 'Travel', desc: 'You can fly and travel internationally with your pacemaker. Carry your implant card, inform airport security, and check with your doctor before long trips.' },
            { icon: '🧲', title: 'MRI Scans', desc: 'With BIOTRONIK ProMRI pacemakers, you can safely undergo MRI scans at 1.5T and 3T. Always inform your MRI center and cardiologist in advance.' },
          ].map((item) => (
            <div key={item.title} className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your BIOTRONIK Home Monitoring</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Your BIOTRONIK pacemaker transmits information daily to your cardiologist through
                the Home Monitoring service. You do not need to do anything — your device communicates
                automatically through the CardioMessenger Smart transmitter.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This means your doctor can detect any changes in your heart rhythm or device function
                early, before they become clinical issues — giving you peace of mind between check-ups.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#003D7A] text-white rounded-xl p-8">
                <div className="text-4xl mb-4">📡</div>
                <div className="text-xl font-bold mb-2">Daily Transmissions</div>
                <div className="text-blue-200 text-sm">Automatic • Secure • Reliable</div>
                <div className="mt-4 text-xs text-blue-300">
                  Every night, your device sends data to your care team
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Talk to your cardiologist or contact BIOTRONIK directly for more information about your device and therapy.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/en-us/patients/mri-scans" className="bg-[#003D7A] text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors">
              MRI Safety
            </Link>
            <Link href="/en-us/patients/electromagnetic-interference" className="border border-[#003D7A] text-[#003D7A] px-6 py-3 rounded font-semibold hover:bg-blue-50 transition-colors">
              Electromagnetic Interference
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
