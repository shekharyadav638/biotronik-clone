import Link from 'next/link';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/en-us/company/about-us' },
    { label: 'Corporate Responsibility', href: '/en-us/company/corporate-responsibility' },
    { label: 'Locations', href: '/en-us/company/locations' },
    { label: 'Careers', href: '/en-us/careers' },
  ],
  Patients: [
    { label: 'Patients and Caregivers', href: '/en-us/patients/patients-and-caregivers' },
    { label: 'MRI Scans', href: '/en-us/patients/mri-scans' },
    { label: 'Electromagnetic Interference', href: '/en-us/patients/electromagnetic-interference' },
    { label: 'International Implant Card', href: '/en-us/patients/international-implant-card' },
    { label: 'Info Brochures', href: '/en-us/patients/patients-and-caregivers' },
    { label: 'FAQ', href: '/en-us/patients/patients-and-caregivers' },
  ],
  Products: [
    { label: 'Cardiac Rhythm Management', href: '/en-us/products/cardiac-rhythm-management-crm' },
    { label: 'Pacing Systems', href: '/en-us/products/cardiac-rhythm-management-crm/pacing-systems' },
    { label: 'Implantable Defibrillators', href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardioverter-defibrillators' },
    { label: 'Cardiac Resynchronization', href: '/en-us/products/cardiac-rhythm-management-crm/cardiac-resynchronization-therapy' },
    { label: 'Implantable Cardiac Monitors', href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardiac-monitors' },
  ],
  Professionals: [
    { label: 'Clinical Studies', href: '/en-us/professionals/clinical-studies' },
    { label: 'Resources', href: '/en-us/professionals/resources' },
    { label: 'Cybersecurity', href: '/en-us/professionals/cybersecurity' },
  ],
  Newsroom: [
    { label: 'Press Releases', href: '/en-us/newsroom' },
    { label: 'Corporate Blog', href: '/en-us/newsroom' },
  ],
  Careers: [
    { label: 'Careers at BIOTRONIK', href: '/en-us/careers' },
    { label: 'Why Work With Us', href: '/en-us/careers' },
    { label: 'Career Opportunities', href: '/en-us/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Footer logo */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white text-[#003D7A] font-bold text-lg px-3 py-1 rounded-sm">
              BIO
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">BIOTRONIK</div>
              <div className="text-gray-400 text-xs">Life. Innovation.</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            BIOTRONIK develops life-changing innovations for cardiac and chronic pain solutions.
            Woermannkehre 1, 12359 Berlin, Germany.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BIOTRONIK SE &amp; Co. KG. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">Imprint</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Statement</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Legal Disclaimer</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">General Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
