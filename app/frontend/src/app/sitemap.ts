import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://codaltec.com/es',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://codaltec.com/es/about',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: 'https://codaltec.com/es/portfolio',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://codaltec.com/es/posts',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: 'https://codaltec.com/es/invesitigation',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
	];
}
