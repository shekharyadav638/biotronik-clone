import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | BIOTRONIK',
  description: 'Learn about BIOTRONIK — 60 years of life-changing innovation in cardiac and pain management.',
};

const milestones = [
  { year: '1963', event: 'BIOTRONIK founded in Berlin by Ingenuin Eckhardt' },
  { year: '1975', event: 'First programmable pacemaker launched' },
  { year: '1993', event: 'Home Monitoring system introduced — industry first' },
  { year: '2003', event: 'Salia and Philos pacemaker families launched' },
  { year: '2010', event: 'ProMRI technology introduced for MRI-safe pacing' },
  { year: '2017', event: 'Ilesto family: world\'s thinnest dual-chamber ICD at the time' },
  { year: '2021', event: 'Rivacor Sky: world-first FDA approved CRT-D with LBBP' },
  { year: '2025', event: 'BIOMONITOR IV launched — next generation cardiac monitoring' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-[#003D7A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1600&h=500&fit=crop" alt="BIOTRONIK Berlin" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/company/about-us" className="hover:text-white">Company</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold">About BIOTRONIK</h1>
          <p className="text-blue-200 mt-4 text-xl max-w-2xl">
            60+ years of life-changing innovation from Berlin to the world.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              BIOTRONIK was founded in 1963 in Berlin, Germany by Ingenuin Eckhardt with a simple but
              powerful vision: use technology to save and improve human lives. Over the next six decades,
              that vision has driven us to create some of the most significant innovations in the history
              of cardiology.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Today, BIOTRONIK employs more than 7,000 people worldwide across 100+ countries. We are
              headquartered in Berlin and operate R&amp;D centers, manufacturing facilities, and commercial
              operations across Europe, North America, Asia Pacific, and South America.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We remain privately owned and family-influenced — allowing us to take a long-term perspective
              and stay true to our purpose without the pressures of short-term financial performance.
            </p>
          </div>
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=350&fit=crop" alt="BIOTRONIK team" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=200&fit=crop" alt="BIOTRONIK office" className="w-full h-40 object-cover rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'Innovation', desc: 'We push the boundaries of what is medically and technically possible.' },
              { icon: '🤝', title: 'Integrity', desc: 'Ethical conduct is non-negotiable — in business, research, and patient care.' },
              { icon: '❤️', title: 'Patient Focus', desc: 'Every decision we make is ultimately in service of patient outcomes.' },
              { icon: '🌍', title: 'Responsibility', desc: 'We take our environmental, social, and ethical responsibilities seriously.' },
            ].map((v) => (
              <div key={v.title} className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">A History of Firsts</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <p className="text-gray-700 text-sm">{m.event}</p>
                  </div>
                  <div className="flex-shrink-0 bg-[#003D7A] text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-sm z-10">
                    {m.year}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
