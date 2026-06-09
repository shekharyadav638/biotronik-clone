'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  {
    label: 'Company',
    href: '/en-us/company/about-us',
    children: [
      { label: 'About Us', href: '/en-us/company/about-us' },
      { label: 'Corporate Responsibility', href: '/en-us/company/corporate-responsibility' },
      { label: 'Locations', href: '/en-us/company/locations' },
      { label: 'Careers', href: '/en-us/careers' },
    ],
  },
  {
    label: 'Patients',
    href: '/en-us/patients/patients-and-caregivers',
    children: [
      { label: 'Patients and Caregivers', href: '/en-us/patients/patients-and-caregivers' },
      { label: 'MRI Scans', href: '/en-us/patients/mri-scans' },
      { label: 'Electromagnetic Interference', href: '/en-us/patients/electromagnetic-interference' },
      { label: 'International Implant Card', href: '/en-us/patients/international-implant-card' },
    ],
  },
  {
    label: 'Products',
    href: '/en-us/products',
    children: [
      { label: 'Product Catalogue', href: '/en-us/products' },
      { label: 'Cardiac Rhythm Management', href: '/en-us/products/cardiac-rhythm-management-crm' },
      { label: 'Pacing Systems', href: '/en-us/products/cardiac-rhythm-management-crm/pacing-systems' },
      { label: 'Implantable Defibrillators', href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardioverter-defibrillators' },
      { label: 'Cardiac Resynchronization Therapy', href: '/en-us/products/cardiac-rhythm-management-crm/cardiac-resynchronization-therapy' },
      { label: 'Implantable Cardiac Monitors', href: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardiac-monitors' },
    ],
  },
  {
    label: 'Professionals',
    href: '/en-us/professionals',
    children: [
      { label: 'Clinical Studies', href: '/en-us/professionals/clinical-studies' },
      { label: 'Resources', href: '/en-us/professionals/resources' },
      { label: 'Cybersecurity', href: '/en-us/professionals/cybersecurity' },
    ],
  },
  {
    label: 'Newsroom',
    href: '/en-us/newsroom',
    children: [],
  },
  {
    label: 'Careers',
    href: '/en-us/careers',
    children: [],
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[#003D7A] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-end items-center h-8 gap-6">
          <span className="cursor-pointer hover:underline">Global</span>
          <span className="cursor-pointer hover:underline">Asia Pacific</span>
          <span className="cursor-pointer hover:underline">Europe</span>
          <span className="cursor-pointer hover:underline text-white font-semibold border-b border-white">North America</span>
          <span className="cursor-pointer hover:underline">South America</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/en-us" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="bg-[#003D7A] text-white font-bold text-xl px-3 py-1 rounded-sm">
                BIO
              </div>
              <div>
                <div className="text-[#003D7A] font-bold text-lg leading-none">BIOTRONIK</div>
                <div className="text-gray-500 text-xs">Life. Innovation.</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-5 text-sm font-medium text-gray-700 hover:text-[#003D7A] transition-colors"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {activeMenu === item.label && item.children.length > 0 && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-[#003D7A] min-w-56 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#003D7A] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search + mobile toggle */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-[#003D7A]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-[#003D7A]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              <Link
                href={item.href}
                className="block px-6 py-3 font-medium text-[#003D7A]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-8 py-2 text-sm text-gray-600 hover:text-[#003D7A]"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
