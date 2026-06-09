import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clinical Studies | Professionals | BIOTRONIK',
  description: 'BIOTRONIK clinical evidence including major trials for pacemakers, ICDs, and CRT devices.',
};

const studies = [
  {
    name: 'LBBP-RESYNC',
    phase: 'Pivotal',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    device: 'Rivacor Sky HF-T QP',
    indication: 'Heart Failure / CRT with LBBP',
    description: 'First pivotal trial for CRT with Left Bundle Branch Pacing. Demonstrated non-inferiority to biventricular CRT with improved electrical parameters.',
    enrollment: '385 patients',
    sites: '42 sites, 8 countries',
  },
  {
    name: 'BIO|CONDUCT',
    phase: 'Registry',
    status: 'Enrolling',
    statusColor: 'bg-blue-100 text-blue-800',
    device: 'Multiple LBBP-compatible devices',
    indication: 'Conduction System Pacing',
    description: 'Large prospective registry evaluating long-term outcomes of left bundle branch area pacing across multiple centers.',
    enrollment: '2,000 patients target',
    sites: '80+ sites worldwide',
  },
  {
    name: 'PROLONG',
    phase: 'Observational',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    device: 'Amvia Sky / Edge',
    indication: 'Pacemaker Longevity',
    description: 'Large-scale real-world registry evaluating device longevity and clinical outcomes in standard pacemaker patients.',
    enrollment: '8,500+ patients',
    sites: '120 centers',
  },
  {
    name: 'REDUCE-MCS',
    phase: 'Randomized',
    status: 'Ongoing',
    statusColor: 'bg-amber-100 text-amber-800',
    device: 'Acticor Sky DR-T',
    indication: 'ICD with SmartDetect',
    description: 'Randomized controlled trial evaluating the reduction of inappropriate shocks using SmartDetect algorithm versus standard detection.',
    enrollment: '950 patients',
    sites: '38 sites',
  },
];

export default function ClinicalStudiesPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/professionals" className="hover:text-white">Professionals</Link>
            <span className="mx-2">/</span>
            <span>Clinical Studies</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clinical Studies</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            BIOTRONIK's evidence base spans randomized controlled trials, registries, and pivotal studies
            supporting the safety and efficacy of our cardiac device portfolio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex gap-4 mb-10 flex-wrap">
          {['All Studies', 'CRM', 'LBBP', 'Remote Monitoring', 'Neuromodulation'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'All Studies' ? 'bg-[#003D7A] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {studies.map((study, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{study.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${study.statusColor}`}>{study.status}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{study.phase}</span>
                </div>
              </div>
              <p className="text-sm text-[#003D7A] font-medium mb-2">{study.indication} — {study.device}</p>
              <p className="text-gray-600 text-sm mb-4">{study.description}</p>
              <div className="flex gap-6 text-xs text-gray-500">
                <span>👥 {study.enrollment}</span>
                <span>🏥 {study.sites}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#003D7A] text-white rounded-2xl p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Investigator-Initiated Research</h2>
              <p className="text-blue-200 mb-6">
                BIOTRONIK supports independent clinical research through our Investigator-Initiated Study
                program. Healthcare professionals and researchers can apply for device grants and
                financial support for high-quality clinical investigations.
              </p>
              <button className="bg-white text-[#003D7A] px-6 py-3 rounded font-semibold hover:bg-blue-50 transition-colors">
                Apply for a Grant
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '150+', label: 'Clinical Trials Supported' },
                { value: '45,000+', label: 'Patients Enrolled' },
                { value: '300+', label: 'Publications' },
                { value: '25+', label: 'Years of Evidence' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
