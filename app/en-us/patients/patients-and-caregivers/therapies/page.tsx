import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Therapies | Patients | BIOTRONIK',
  description: 'Learn about cardiac therapies including pacemakers, ICDs, CRT and cardiac monitors from BIOTRONIK.',
};

export default function TherapiesPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/patients/patients-and-caregivers" className="hover:text-white">Patients</Link>
            <span className="mx-2">/</span>
            <span>Therapies</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Cardiac Therapies</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            Understanding your therapy is an important part of living well with a cardiac device.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Pacemakers', href: '/en-us/patients/patients-and-caregivers/therapies/pacemaker', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop', desc: 'Learn how pacemakers work and what to expect after your implant.' },
            { title: 'Cardiac Resynchronization Therapy', href: '/en-us/patients/patients-and-caregivers/therapies/cardiac-resynchronization-therapy', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop', desc: 'Find out how CRT devices help improve heart function in heart failure.' },
            { title: 'Implantable Defibrillators (ICDs)', href: '/en-us/patients/patients-and-caregivers', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop', desc: 'Understand how ICDs detect and treat dangerous heart rhythms.' },
            { title: 'Implantable Cardiac Monitors', href: '/en-us/patients/patients-and-caregivers', image: 'https://images.unsplash.com/photo-1581093196867-ca7e74d6f0a0?w=600&h=400&fit=crop', desc: 'Learn about long-term heart monitoring devices and what they do.' },
          ].map((t) => (
            <Link key={t.href+t.title} href={t.href} className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
              <img src={t.image} alt={t.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#003D7A] transition-colors">{t.title}</h2>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
