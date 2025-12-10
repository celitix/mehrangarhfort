export default function sitemap() {
  return [
    {
      url: 'https://mehrangarhfort.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mehrangarhfort.in/about-mehrangarh',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://mehrangarhfort.in/nearby-places',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
    url: 'https://mehrangarhfort.in/getting-there',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
       url: 'https://mehrangarhfort.in/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
]
}

