import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.biotronik-clone.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/en-us', priority: 1.0, changeFrequency: 'weekly' as const },
    // Products
    { url: '/en-us/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/en-us/products/cardiac-rhythm-management-crm', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/en-us/products/cardiac-rhythm-management-crm/pacing-systems', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardioverter-defibrillators', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/en-us/products/cardiac-rhythm-management-crm/cardiac-resynchronization-therapy', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/en-us/products/cardiac-rhythm-management-crm/implantable-cardiac-monitors', priority: 0.8, changeFrequency: 'monthly' as const },
    // Patients
    { url: '/en-us/patients/patients-and-caregivers', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/en-us/patients/patients-and-caregivers/therapies', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/patients/patients-and-caregivers/therapies/pacemaker', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/patients/patients-and-caregivers/therapies/cardiac-resynchronization-therapy', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/patients/mri-scans', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/patients/electromagnetic-interference', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/patients/international-implant-card', priority: 0.7, changeFrequency: 'monthly' as const },
    // Professionals
    { url: '/en-us/professionals', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/en-us/professionals/clinical-studies', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/en-us/professionals/resources', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/professionals/cybersecurity', priority: 0.6, changeFrequency: 'monthly' as const },
    // Company
    { url: '/en-us/company/about-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/company/corporate-responsibility', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/en-us/company/locations', priority: 0.6, changeFrequency: 'monthly' as const },
    // Careers
    { url: '/en-us/careers', priority: 0.8, changeFrequency: 'weekly' as const },
    // Newsroom
    { url: '/en-us/newsroom', priority: 0.8, changeFrequency: 'daily' as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
