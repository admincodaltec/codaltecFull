import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.codaltec.com/',
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 1,
		},
		{
			url: 'https://www.codaltec.com/es/about',
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 0.9,
		},
		{
			url: 'https://www.codaltec.com/es/portfolio',
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 0.8,
		},
		{
			url: 'https://www.codaltec.com/es/posts',
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 0.7,
		},
		{
			url: 'https://www.codaltec.com/es/invesitigation',
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 0.7,
		},
	];
}
