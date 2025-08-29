import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://quietyourdevice.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://quietyourdevice.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quietyourdevice.com/challenge',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://quietyourdevice.com/resources',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://quietyourdevice.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://quietyourdevice.com/blog/1',
      lastModified: new Date('2025-05-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quietyourdevice.com/blog/2',
      lastModified: new Date('2025-05-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quietyourdevice.com/blog/3',
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quietyourdevice.com/blog/4',
      lastModified: new Date('2025-06-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quietyourdevice.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://quietyourdevice.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
