import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Catalogue | BIOTRONIK',
  description: 'Explore BIOTRONIK\'s comprehensive product portfolio in cardiac rhythm management, neuromodulation, and digital health.',
};

const products = [
  {
    category: 'Cardiac Rhythm Management',
    slug: 'cardiac-rhythm-management-crm',
    description: 'Complete solutions for patients with cardiac arrhythmias and heart failure.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop',
    items: [
      { name: 'Pacing Systems', href: '/en-us/products/cardiac-rhythm-management-crm/pacing-systems' },
      { name: 'Implantable Cardioverter Defibrillators', href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardioverter-defibrillators' },
      { name: 'Cardiac Resynchronization Therapy', href: '/en-us/products/cardiac-rhythm-management-crm/cardiac-resynchronization-therapy' },
      { name: 'Implantable Cardiac Monitors', href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardiac-monitors' },
    ],
  },
  {
    category: 'Neuromodulation',
    slug: 'neuromodulation',
    description: 'Spinal cord stimulation systems for chronic pain management.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    items: [
      { name: 'Prospera SCS System', href: '/en-us/products' },
      { name: 'Spinal Cord Stimulation', href: '/en-us/products' },
    ],
  },
  {
    category: 'Digital Health',
    slug: 'digital-health',
    description: 'Remote monitoring and connected care technologies.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    items: [
      { name: 'BIOTRONIK Home Monitoring', href: '/en-us/professionals' },
      { name: 'CardioMessenger Smart', href: '/en-us/professionals' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#003D7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/en-us" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Product Catalogue</h1>
          <p className="text-blue-200 mt-4 text-lg max-w-2xl">
            Discover our complete portfolio of life-changing medical devices and digital health solutions.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {products.map((cat, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <img src={cat.image} alt={cat.category} className="w-full h-72 object-cover rounded-xl shadow-lg" />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{cat.category}</h2>
                <p className="text-gray-600 mb-6 text-lg">{cat.description}</p>
                <ul className="space-y-3 mb-6">
                  {cat.items.map((item, j) => (
                    <li key={j}>
                      <Link href={item.href} className="flex items-center text-[#003D7A] hover:underline font-medium">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/en-us/products/${cat.slug}`} className="bg-[#003D7A] text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors inline-block">
                  View {cat.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
