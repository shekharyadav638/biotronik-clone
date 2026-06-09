import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BIOTRONIK | Life. Innovation.',
  description: 'BIOTRONIK develops life-changing innovations for cardiac and chronic pain solutions.',
};

const highlights = [
  {
    date: 'May 2026',
    category: 'Conference',
    title: 'BIOTRONIK at EHRA 2026',
    description: 'Join us at the European Heart Rhythm Association congress to discover our latest innovations in cardiac rhythm management.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
  },
  {
    date: 'April 2026',
    category: 'Product',
    title: 'BIOMONITOR IV — Remote Cardiac Monitoring',
    description: 'The next-generation implantable cardiac monitor with extended battery life and enhanced remote monitoring capabilities.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop',
  },
  {
    date: 'March 2026',
    category: 'Innovation',
    title: 'Digital Heart Summit 2026',
    description: 'Leading experts gather to discuss the future of digital health in cardiology and remote patient monitoring.',
    image: 'https://images.unsplash.com/photo-1581093196867-ca7e74d6f0a0?w=400&h=250&fit=crop',
  },
  {
    date: 'February 2026',
    category: 'Product',
    title: 'Rivacor Sky — FDA Approved',
    description: 'Our newest CRT-D system receives FDA approval with world-first Left Bundle Branch Pacing capabilities.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop',
  },
];

const pressReleases = [
  { date: 'June 5, 2026', location: 'Berlin, Germany', title: 'BIOTRONIK Announces Record Innovation Pipeline for 2026' },
  { date: 'May 22, 2026', location: 'Washington D.C., USA', title: "FDA Approves BIOTRONIK's Rivacor Sky CRT-D with LBBP Technology" },
  { date: 'May 10, 2026', location: 'Sydney, Australia', title: 'BIOTRONIK Partners with University of Sydney for Cardiac Research' },
  { date: 'April 28, 2026', location: 'Berlin, Germany', title: 'BIOTRONIK Celebrates 60 Years of Life-Changing Innovation' },
  { date: 'April 15, 2026', location: 'Chicago, USA', title: 'BIOTRONIK Joins Go Red for Heart Health Campaign' },
];

const blogs = [
  {
    category: 'Cardiology',
    title: 'Understanding Left Bundle Branch Pacing: The Future of Cardiac Stimulation',
    date: 'June 1, 2026',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=250&fit=crop',
  },
  {
    category: 'Company Culture',
    title: 'Why BIOTRONIK Engineers Choose Purpose Over Prestige',
    date: 'May 18, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
  },
  {
    category: 'Patient Stories',
    title: 'Back to the Mountains: How a Pacemaker Gave Me My Life Back',
    date: 'May 5, 2026',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#003D7A] text-white min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=700&fit=crop"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003D7A] via-[#003D7A]/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="text-blue-300 font-semibold text-xs uppercase tracking-[0.2em] mb-5">
            Life. Innovation.
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-xl">
            Life-Changing<br />
            <span className="text-blue-300">Innovations</span>
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-lg leading-relaxed">
            BIOTRONIK develops cardiac and chronic pain solutions that help people with heart and
            blood vessel diseases lead healthy, active and fulfilling lives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/en-us/products"
              className="bg-white text-[#003D7A] px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-colors text-sm"
            >
              Explore Products
            </Link>
            <Link
              href="/en-us/patients/patients-and-caregivers"
              className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#003D7A] transition-colors text-sm"
            >
              Patient Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE WE MAKE ───────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#003D7A] font-semibold text-xs uppercase tracking-[0.15em] mb-3">Our Mission</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Difference We Make</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                For over 60 years, BIOTRONIK has been at the forefront of cardiac rhythm management,
                neuromodulation, and digital health technologies. Our innovations have helped millions
                of patients worldwide lead better, longer lives.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are a global company with deep local roots — combining world-class engineering
                with genuine compassion for patients and their families. Every product we create is
                driven by the singular purpose of improving human life.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: '60+', label: 'Years of Innovation' },
                  { value: '100+', label: 'Countries' },
                  { value: '7,000+', label: 'Employees' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-bold text-[#003D7A]">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/en-us/company/about-us" className="inline-flex items-center text-[#003D7A] font-semibold hover:underline text-sm">
                Learn more about us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop" alt="Medical team" className="rounded-lg w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop" alt="Cardiac device" className="rounded-lg w-full h-48 object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=300&fit=crop" alt="Innovation lab" className="rounded-lg w-full h-48 object-cover -mt-8" />
              <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=300&fit=crop" alt="Patient care" className="rounded-lg w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT AREAS ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#003D7A] font-semibold text-xs uppercase tracking-[0.15em] mb-3">Our Portfolio</p>
            <h2 className="text-4xl font-bold text-gray-900">Product Areas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: 'CRM', title: 'Cardiac Rhythm Management',
                desc: 'Pacemakers, ICDs, CRT systems, and remote monitoring solutions for patients with arrhythmias and heart failure.',
                href: '/en-us/products/cardiac-rhythm-management-crm',
                img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&h=300&fit=crop',
              },
              {
                tag: 'Neuromodulation', title: 'Neuromodulation',
                desc: 'Advanced spinal cord stimulation (SCS) systems for the treatment of chronic pain, offering patients relief and improved quality of life.',
                href: '/en-us/products',
                img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop',
              },
              {
                tag: 'Digital Health', title: 'Digital Health Technologies',
                desc: 'Remote patient monitoring, Home Monitoring, and connected care solutions enabling physicians to track patients from anywhere.',
                href: '/en-us/professionals',
                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
              },
            ].map((card) => (
              <div key={card.tag} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#003D7A]/40" />
                  <span className="absolute bottom-3 left-4 bg-[#003D7A] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {card.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{card.desc}</p>
                  <Link href={card.href} className="text-[#003D7A] font-semibold text-sm hover:underline inline-flex items-center">
                    Explore
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-[#003D7A] font-semibold text-xs uppercase tracking-[0.15em] mb-3">Latest News</p>
              <h2 className="text-4xl font-bold text-gray-900">Highlights</h2>
            </div>
            <Link href="/en-us/newsroom" className="text-[#003D7A] font-semibold hover:underline hidden md:block text-sm">
              View all news →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-50 text-[#003D7A] px-2 py-0.5 rounded-full font-medium">{item.category}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS RELEASES + BLOG ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Press */}
            <div>
              <p className="text-[#003D7A] font-semibold text-xs uppercase tracking-[0.15em] mb-3">Media</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Releases &amp; Statements</h2>
              <div className="space-y-5">
                {pressReleases.map((pr, i) => (
                  <div key={i} className="flex gap-4 border-b border-gray-100 pb-5 last:border-0">
                    <div className="text-xs text-gray-400 w-28 flex-shrink-0 pt-0.5 leading-relaxed">
                      <div className="font-medium">{pr.date}</div>
                      <div className="text-gray-300 mt-1">{pr.location}</div>
                    </div>
                    <Link href="/en-us/newsroom" className="text-sm font-medium text-gray-800 hover:text-[#003D7A] transition-colors leading-snug">
                      {pr.title}
                    </Link>
                  </div>
                ))}
              </div>
              <Link href="/en-us/newsroom" className="mt-6 inline-block text-[#003D7A] font-semibold hover:underline text-sm">
                All press releases →
              </Link>
            </div>

            {/* Blog */}
            <div>
              <p className="text-[#003D7A] font-semibold text-xs uppercase tracking-[0.15em] mb-3">Blog</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">From Our Blog</h2>
              <div className="space-y-6">
                {blogs.map((blog, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <img src={blog.image} alt={blog.title} className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
                    <div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{blog.category}</span>
                      <h3 className="text-sm font-bold text-gray-900 mt-1.5 mb-1 leading-snug hover:text-[#003D7A] cursor-pointer">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-gray-400">{blog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITY BANNER ────────────────────────────── */}
      <section className="relative py-24 bg-[#003D7A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1600&h=500&fit=crop"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-300 font-semibold text-xs uppercase tracking-[0.15em] mb-3">60+ Years of Purpose</p>
              <h2 className="text-4xl font-bold mb-6">We Take Our Responsibility Seriously</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                At BIOTRONIK, responsibility is embedded in every decision we make. From sustainable
                manufacturing to ethical clinical practices, we ensure our work benefits patients,
                communities, and the world.
              </p>
              <Link href="/en-us/company/corporate-responsibility" className="bg-white text-[#003D7A] px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-colors inline-block text-sm">
                Our Responsibility
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1963', label: 'Founded in Berlin' },
                { value: '100+', label: 'Countries Worldwide' },
                { value: 'ISO 14001', label: 'Certified' },
                { value: 'AAA', label: 'Ethics Rating' },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-200 mb-1">{s.value}</div>
                  <div className="text-xs text-blue-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREERS CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#003D7A] font-semibold text-xs uppercase tracking-[0.15em] mb-3">Join Our Team</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Where Innovation Meets Purpose</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            At BIOTRONIK, you will be part of a global team developing technologies that save and
            improve lives every single day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/en-us/careers" className="bg-[#003D7A] text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors text-sm">
              Explore Careers
            </Link>
            <Link href="/en-us/company/about-us" className="border-2 border-[#003D7A] text-[#003D7A] px-8 py-3 rounded font-semibold hover:bg-[#003D7A] hover:text-white transition-colors text-sm">
              About BIOTRONIK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
