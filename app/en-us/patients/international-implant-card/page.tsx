import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International Implant Card | Patients | BIOTRONIK',
  description: 'Information about the BIOTRONIK International Implant Card for cardiac device patients.',
};

export default function ImplantCardPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/patients/patients-and-caregivers" className="hover:text-white">Patients</Link>
            <span className="mx-2">/</span>
            <span>International Implant Card</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">International Implant Card</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Your device identification card — always carry it with you.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Important ID Card</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              After receiving your BIOTRONIK cardiac implant, you will be given an International Implant Card.
              This credit-card-sized document contains essential information about your device and should
              be carried with you at all times.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The card is particularly important when you travel, visit hospitals, go to airports,
              or need emergency medical care. It alerts healthcare providers and security personnel
              that you have an implanted cardiac device.
            </p>
            <div className="space-y-3">
              {[
                'Device type and model number',
                'Lead model numbers',
                'Implant date and implanting physician',
                'Contact information for BIOTRONIK',
                'MRI compatibility information',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003D7A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#003D7A] text-white rounded-2xl p-8 shadow-xl max-w-xs mx-auto">
              <div className="text-xs text-blue-300 uppercase tracking-widest mb-4">BIOTRONIK</div>
              <div className="text-lg font-bold mb-1">International Implant Card</div>
              <div className="text-blue-200 text-xs mb-6">Cardiac Rhythm Management</div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-left">
                <div className="text-xs text-blue-300 mb-1">Patient</div>
                <div className="font-semibold">John Doe</div>
                <div className="text-xs text-blue-300 mt-3 mb-1">Device</div>
                <div className="font-semibold text-sm">Amvia Sky DR-T</div>
                <div className="text-xs text-blue-300 mt-3 mb-1">MRI Conditional</div>
                <div className="font-semibold text-sm">1.5T / 3T</div>
              </div>
              <div className="mt-4 text-xs text-blue-300">biotronik.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
