import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Locations | BIOTRONIK',
  description: 'BIOTRONIK global offices, R&D centers, and manufacturing facilities worldwide.',
};

const locations = [
  { region: 'Headquarters', name: 'Berlin, Germany', role: 'Global HQ & R&D', address: 'Woermannkehre 1, 12359 Berlin', flag: '🇩🇪' },
  { region: 'Europe', name: 'Bülach, Switzerland', role: 'R&D Center', address: 'Switzerland', flag: '🇨🇭' },
  { region: 'North America', name: 'Lake Oswego, OR, USA', role: 'US Headquarters', address: 'Oregon, USA', flag: '🇺🇸' },
  { region: 'North America', name: 'Montréal, Canada', role: 'Clinical & Commercial', address: 'Québec, Canada', flag: '🇨🇦' },
  { region: 'Asia Pacific', name: 'Tokyo, Japan', role: 'Japan HQ & Distribution', address: 'Tokyo, Japan', flag: '🇯🇵' },
  { region: 'Asia Pacific', name: 'Sydney, Australia', role: 'Australia & NZ Operations', address: 'New South Wales, Australia', flag: '🇦🇺' },
  { region: 'Asia Pacific', name: 'Singapore', role: 'Asia Pacific HQ', address: 'Singapore', flag: '🇸🇬' },
  { region: 'South America', name: 'São Paulo, Brazil', role: 'Latin America HQ', address: 'São Paulo, Brazil', flag: '🇧🇷' },
  { region: 'Europe', name: 'Stockholm, Sweden', role: 'Nordic Operations', address: 'Stockholm, Sweden', flag: '🇸🇪' },
  { region: 'Europe', name: 'Milan, Italy', role: 'Italian Operations', address: 'Milan, Italy', flag: '🇮🇹' },
];

const regions = ['All', 'Headquarters', 'Europe', 'North America', 'Asia Pacific', 'South America'];

export default function LocationsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en-us/company/about-us" className="hover:text-white">Company</Link>
            <span className="mx-2">/</span>
            <span>Locations</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Global Locations</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-3xl">
            BIOTRONIK operates in more than 100 countries with offices, R&D centers, and manufacturing
            facilities across the globe.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-xl h-72 mb-12 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-5xl mb-4">🌍</div>
            <p className="font-medium text-gray-700">Global presence in 100+ countries</p>
            <p className="text-sm mt-1">Interactive map</p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap mb-10">
          {regions.map((r) => (
            <button key={r} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${r === 'All' ? 'bg-[#003D7A] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {r}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="text-3xl">{loc.flag}</div>
                <div>
                  <div className="text-xs text-[#003D7A] font-semibold uppercase tracking-wide mb-1">{loc.region}</div>
                  <h3 className="font-bold text-gray-900">{loc.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{loc.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{loc.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
