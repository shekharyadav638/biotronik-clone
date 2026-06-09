import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsroom | BIOTRONIK',
  description: 'BIOTRONIK press releases, corporate blog, and company news.',
};

const pressReleases = [
  { date: 'June 5, 2026', location: 'Berlin, Germany', title: 'BIOTRONIK Announces Record Innovation Pipeline for 2026', category: 'Company News' },
  { date: 'May 22, 2026', location: 'Washington D.C., USA', title: 'FDA Approves BIOTRONIK\'s Rivacor Sky CRT-D with LBBP Technology', category: 'FDA Approval' },
  { date: 'May 10, 2026', location: 'Sydney, Australia', title: 'BIOTRONIK Partners with University of Sydney for Landmark Cardiac Research Study', category: 'Research' },
  { date: 'April 28, 2026', location: 'Berlin, Germany', title: 'BIOTRONIK Celebrates 60 Years of Life-Changing Innovation in Cardiac Medicine', category: 'Company News' },
  { date: 'April 15, 2026', location: 'Chicago, USA', title: 'BIOTRONIK Joins American Heart Association\'s Go Red for Heart Health Campaign', category: 'Partnership' },
  { date: 'March 30, 2026', location: 'Berlin, Germany', title: 'BIOTRONIK Reports Strong 2025 Financial Year with Continued Investment in R&D', category: 'Financial' },
  { date: 'March 12, 2026', location: 'Vienna, Austria', title: 'New Data from LBBP-RESYNC Trial Presented at ACC 2026 Scientific Sessions', category: 'Clinical Data' },
  { date: 'February 18, 2026', location: 'Berlin, Germany', title: 'BIOTRONIK Launches BIOMONITOR IV — Next Generation Implantable Cardiac Monitor', category: 'Product Launch' },
];

const blogPosts = [
  {
    category: 'Cardiology',
    title: 'Understanding Left Bundle Branch Pacing: The Future of Cardiac Stimulation',
    date: 'June 1, 2026',
    author: 'Dr. Stefan Richter, BIOTRONIK Medical Director',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=250&fit=crop',
    excerpt: 'Left Bundle Branch Pacing represents a paradigm shift in cardiac resynchronization therapy. In this article, we explore the clinical evidence and practical considerations...',
  },
  {
    category: 'Company Culture',
    title: 'Why BIOTRONIK Engineers Choose Purpose Over Prestige',
    date: 'May 18, 2026',
    author: 'BIOTRONIK HR Team',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
    excerpt: 'In a competitive market for engineering talent, what makes BIOTRONIK a preferred employer? We spoke to engineers across three continents...',
  },
  {
    category: 'Patient Stories',
    title: 'Back to the Mountains: How a Pacemaker Gave Me My Life Back',
    date: 'May 5, 2026',
    author: 'BIOTRONIK Editorial Team',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop',
    excerpt: 'At 58, Maria thought her days of alpine hiking were behind her. Six months after receiving her BIOTRONIK pacemaker, she completed the Tour du Mont Blanc...',
  },
  {
    category: 'Innovation',
    title: 'How BIOTRONIK Home Monitoring Changed the Way We Care for Patients',
    date: 'April 22, 2026',
    author: 'Dr. Jan Müller, Clinical Research',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
    excerpt: 'When BIOTRONIK introduced Home Monitoring in 1993, it was a radical concept. Three decades later, remote patient monitoring is transforming cardiac care globally...',
  },
];

export default function NewsroomPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Newsroom</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Newsroom</h1>
          <p className="text-blue-200 mt-4 text-lg">
            The latest from BIOTRONIK — press releases, corporate blog, and company announcements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Press Releases */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              Press Releases &amp; Statements
              <span className="text-xs bg-blue-100 text-[#003D7A] px-2 py-1 rounded-full font-medium">{pressReleases.length} articles</span>
            </h2>
            <div className="space-y-5">
              {pressReleases.map((pr, i) => (
                <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{pr.category}</span>
                    <span className="text-xs text-gray-400">{pr.date}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{pr.location}</span>
                  </div>
                  <Link href="#" className="text-sm font-medium text-gray-800 hover:text-[#003D7A] transition-colors leading-snug block">
                    {pr.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Blog */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Corporate Blog</h2>
            <div className="space-y-8">
              {blogPosts.map((post, i) => (
                <div key={i} className="flex gap-4">
                  <img src={post.image} alt={post.title} className="w-28 h-24 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{post.category}</span>
                    <h3 className="text-sm font-bold text-gray-900 mt-1 mb-1 leading-snug hover:text-[#003D7A] cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">{post.date} · {post.author}</p>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
