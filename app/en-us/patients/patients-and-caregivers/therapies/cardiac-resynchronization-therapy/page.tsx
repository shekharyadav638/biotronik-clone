import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cardiac Resynchronization Therapy | Patients | BIOTRONIK',
  description: 'Patient information about CRT devices for heart failure from BIOTRONIK.',
};

export default function CRTPatientPage() {
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
            <span>Cardiac Resynchronization Therapy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Cardiac Resynchronization Therapy</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            CRT helps the left and right ventricles beat in sync, improving the heart's pumping function in heart failure patients.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Cardiac Resynchronization?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In some people with heart failure, the two lower chambers of the heart (ventricles) do not
              beat in a coordinated way. This dyssynchrony reduces the heart's pumping efficiency.
              Cardiac Resynchronization Therapy (CRT) uses a special pacemaker to coordinate the timing
              of the left and right ventricular contractions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Clinical evidence shows that CRT can reduce symptoms of heart failure, improve quality of
              life, decrease hospitalization, and improve survival in selected patients.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '70%', label: 'Patients see improvement' },
                { value: '↓35%', label: 'Hospitalization reduction' },
                { value: '↑QoL', label: 'Improved quality of life' },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#003D7A]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" alt="CRT patient" className="w-full h-72 object-cover rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
}
