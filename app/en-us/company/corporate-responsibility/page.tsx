import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Responsibility | BIOTRONIK',
  description: 'BIOTRONIK\'s commitment to sustainability, ethics, and corporate social responsibility.',
};

export default function CorporateResponsibilityPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-[#003D7A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1600&h=500&fit=crop" alt="Responsibility" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/company/about-us" className="hover:text-white">Company</Link>
            <span className="mx-2">/</span>
            <span>Corporate Responsibility</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold">Corporate Responsibility</h1>
          <p className="text-blue-200 mt-4 text-xl max-w-2xl">
            Doing right by patients, people, and the planet.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At BIOTRONIK, responsibility is not an afterthought — it is woven into everything we do.
            We believe that a company that saves lives must also protect the environment, treat its
            people with dignity, and conduct business with the highest ethical standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Sustainability',
              icon: '🌱',
              desc: 'We are committed to reducing our environmental footprint through energy efficiency, waste reduction, and responsible supply chain management.',
              items: ['ISO 14001 Environmental Certification', 'Carbon neutrality roadmap', 'Packaging reduction initiative', 'Renewable energy targets'],
            },
            {
              title: 'Ethics &amp; Compliance',
              icon: '⚖️',
              desc: 'We maintain the highest standards of business ethics across all our operations globally, with zero tolerance for corruption or unethical conduct.',
              items: ['Code of Conduct', 'Anti-bribery program', 'Whistleblower protection', 'Annual compliance training'],
            },
            {
              title: 'Social Responsibility',
              icon: '🤝',
              desc: 'We invest in our communities, support medical education in underserved regions, and champion diversity and inclusion in our workforce.',
              items: ['Healthcare access programs', 'STEM education sponsorship', 'Disaster relief support', 'Diversity & inclusion goals'],
            },
          ].map((area) => (
            <div key={area.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: area.title }}></h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{area.desc}</p>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitments by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: '-30%', label: 'CO₂ reduction by 2027', color: 'text-green-600' },
              { value: '100%', label: 'Conflict-free materials', color: 'text-blue-700' },
              { value: '45%', label: 'Women in leadership', color: 'text-purple-600' },
              { value: '4.8/5', label: 'Employee satisfaction', color: 'text-amber-600' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
