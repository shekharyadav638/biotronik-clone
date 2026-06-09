import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electromagnetic Interference | Patients | BIOTRONIK',
  description: 'Information on electromagnetic interference and cardiac devices from BIOTRONIK.',
};

export default function EMIPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/patients/patients-and-caregivers" className="hover:text-white">Patients</Link>
            <span className="mx-2">/</span>
            <span>Electromagnetic Interference</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Electromagnetic Interference</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Understanding which everyday devices and environments may affect your cardiac implant.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl">
            Most everyday electronic devices are safe to use with BIOTRONIK cardiac implants.
            However, some devices with strong electromagnetic fields may interfere with your device.
            This page helps you understand what is safe and what precautions to take.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-800 mb-4">✅ Generally Safe</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {['Mobile phones (keep 15cm away)', 'Computers and tablets', 'Television sets', 'Microwave ovens (working properly)', 'Electric blankets', 'Household appliances'].map(item => (
                <li key={item} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-4">⚠️ Take Precautions</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {['Airport security — inform staff', 'Metal detectors — request hand-search', 'Anti-theft gates — do not linger', 'Medical equipment — inform staff', 'Electric power tools — maintain distance', 'Some welding equipment'].map(item => (
                <li key={item} className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-4">⛔ Avoid or Consult Doctor</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {['MRI without ProMRI clearance', 'Diathermy (therapeutic)', 'High-voltage power lines (very close)', 'Induction heating equipment', 'Some industrial magnets', 'Radiation therapy near device'].map(item => (
                <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
