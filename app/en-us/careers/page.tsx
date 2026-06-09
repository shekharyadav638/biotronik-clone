import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at BIOTRONIK | BIOTRONIK',
  description: 'Join BIOTRONIK and build a career where your work saves lives. Explore open positions worldwide.',
};

const careerAreas = [
  { area: 'Engineering & R&D', count: '142 open roles', icon: '⚙️', desc: 'Hardware, software, systems, and R&D engineering positions across our global centers.' },
  { area: 'Clinical & Medical Affairs', count: '38 open roles', icon: '🏥', desc: 'Clinical study management, medical affairs, and regulatory science positions.' },
  { area: 'Sales & Marketing', count: '95 open roles', icon: '📈', desc: 'Commercial, marketing, and account management roles across all regions.' },
  { area: 'Operations & Quality', count: '67 open roles', icon: '✅', desc: 'Manufacturing, supply chain, quality assurance, and regulatory affairs roles.' },
  { area: 'Software & Digital Health', count: '55 open roles', icon: '💻', desc: 'Digital health platform, data science, and IT roles for connected care.' },
  { area: 'Corporate Functions', count: '44 open roles', icon: '🏢', desc: 'Finance, HR, legal, communications, and other corporate functions.' },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-[#003D7A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=500&fit=crop" alt="BIOTRONIK team" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Careers</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">Work Where It Matters Most</h1>
          <p className="text-blue-200 mt-4 text-xl max-w-2xl">
            At BIOTRONIK, every role contributes to saving and improving lives. Join 7,000+ colleagues across 100+ countries.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-[#003D7A] px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-colors">
              Search Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#003D7A] transition-colors">
              Our Culture
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Why BIOTRONIK */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Work at BIOTRONIK</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop" alt="BIOTRONIK workplace" className="w-full h-72 object-cover rounded-xl shadow-lg" />
            <div>
              <div className="space-y-6">
                {[
                  { title: 'Purpose-Driven Work', desc: 'Your work directly contributes to devices that keep people\'s hearts beating and help patients live full lives.' },
                  { title: 'Innovation Culture', desc: 'We invest heavily in R&D and encourage every employee to contribute ideas and drive innovation forward.' },
                  { title: 'Global Opportunities', desc: 'With operations in 100+ countries, you can grow your career internationally within BIOTRONIK.' },
                  { title: 'Competitive Benefits', desc: 'Comprehensive benefits including health insurance, pension, flexible work, and professional development.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#003D7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Career Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {careerAreas.map((area) => (
              <div key={area.area} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#003D7A] transition-all group cursor-pointer">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#003D7A] transition-colors">{area.area}</h3>
                <p className="text-xs text-[#003D7A] font-semibold mb-3">{area.count}</p>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#003D7A] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Browse our open positions and take the first step toward a career that makes a real difference.
          </p>
          <button className="bg-white text-[#003D7A] px-10 py-3 rounded font-semibold hover:bg-blue-50 transition-colors text-lg">
            View All Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
