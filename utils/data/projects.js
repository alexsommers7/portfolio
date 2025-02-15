import storepiImagePng from '@images/project-showcase--storepi.png';
import storepiImageWebp from '@images/project-showcase--storepi.webp';
import scraperImagePng from '@images/project-showcase--real-estate-scraper.png';
import scraperImageWebp from '@images/project-showcase--real-estate-scraper.webp';
import alexSommersImagePng from '@images/project-showcase--alex-sommers.png';
import alexSommersImageWebp from '@images/project-showcase--alex-sommers.webp';
import heritageImagePng from '@images/project-showcase--heritage-assited-living.png';
import heritageImageWebp from '@images/project-showcase--heritage-assited-living.webp';
import lovelyHeartsImagePng from '@images/project-showcase--lovely-hearts-az.png';
import lovelyHeartsImageWebp from '@images/project-showcase--lovely-hearts-az.webp';
import jadImagePng from '@images/project-showcase--jad-electric.png';
import jadImageWebp from '@images/project-showcase--jad-electric.webp';

export default [
  {
    title: 'StorePI',
    description:
      'An open-source API that was created for use in e-commerce prototyping and Front-End talent evaluations. Features product, user, and authentication resources plus more.',
    tools: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Vercel'],
    primaryCTA: 'View Docs',
    primaryLink: 'https://storepi.vercel.app/docs/introduction',
    secondaryCTA: 'View Code',
    secondaryLink: 'https://github.com/alexsommers7/store-pi',
    image: storepiImagePng,
    imageWebp: storepiImageWebp,
    alt: 'StorePI documentation interface',
    showOnHomePage: true,
    openSource: true,
  },
  {
    title: 'Real Estate Scraper',
    description:
      'A bespoke web scraper created for a real estate attorney. Features a GUI for running scrapes and viewing past scrape results, real-time tracking, IP proxy rotation, authentication, email alerts, and more.',
    tools: [
      'React',
      'TypeScript',
      'MUI',
      'Node',
      'Express',
      'PostgreSQL',
      'Puppeteer',
      'WebSocket',
      'AWS S3',
      'JWT',
      'SendGrid API',
      'Heroku',
    ],
    primaryCTA: '',
    primaryLink: '',
    secondaryCTA: '',
    secondaryLink: '',
    image: scraperImagePng,
    imageWebp: scraperImageWebp,
    alt: 'Real Estate Scraper interface',
    showOnHomePage: true,
    openSource: false,
  },
  {
    title: 'AlexSommers.com',
    description:
      "This bad boy right here! I built it as a one-stop-shop to house my work, resume, and contact information. What's more, it's a way to document my journey and share it with others.",
    tools: ['Nuxt', 'GSAP', 'SCSS', 'Netlify', 'Adobe XD'],
    primaryCTA: 'View Demo',
    primaryLink: 'https://alexsommers.com/',
    secondaryCTA: 'View Code',
    secondaryLink: 'https://github.com/alexsommers7/portfolio',
    image: alexSommersImagePng,
    imageWebp: alexSommersImageWebp,
    alt: 'AlexSommers.com interface',
    showOnHomePage: false,
    openSource: true,
    isSelf: true,
  },
  {
    title: 'Heritage Assisted Living',
    description:
      'A website for a local Assisted Living Facility that has since sold and rebranded. The owners were looking for a way to tell their story in a visual manner as well as help in establishing their digital footprint.',
    tools: ['JavaScript', 'SCSS', 'HTML', 'Netlify', 'Adobe XD'],
    primaryCTA: 'View Demo',
    primaryLink: 'https://heritage-az.netlify.app/',
    secondaryCTA: 'View Code',
    secondaryLink: 'https://github.com/alexsommers7/heritage-assisted-living',
    image: heritageImagePng,
    imageWebp: heritageImageWebp,
    alt: 'Heritage Assisted Living interface',
    showOnHomePage: false,
    openSource: true,
  },
  {
    title: 'Lovely Hearts AZ',
    description:
      'Website for a local in-home care provider who was looking for a way to provide a high-level overview of their services, as well as provide a method of communication for prospective customers.',
    tools: ['JavaScript', 'SCSS', 'HTML', 'Netlify', 'Adobe XD'],
    primaryCTA: 'View Demo',
    primaryLink: 'https://lovelyheartsaz.com/',
    secondaryCTA: 'View Code',
    secondaryLink: 'https://github.com/alexsommers7/lovelyheartsaz',
    image: lovelyHeartsImagePng,
    imageWebp: lovelyHeartsImageWebp,
    alt: 'Lovely Hearts AZ interface',
    showOnHomePage: true,
    openSource: true,
  },
  {
    title: 'J.A Dancik Electric',
    description:
      'My first "real world" website for a since-closed business. This client, a local electrician, wanted to keep the information basic and simply establish a way for current and future customers to contact them.',
    tools: ['JavaScript', 'SCSS', 'HTML', 'Netlify', 'Adobe XD'],
    primaryCTA: 'View Demo',
    primaryLink: 'https://ja-dancik-electric.netlify.app/',
    secondaryCTA: 'View Code',
    secondaryLink: 'https://github.com/alexsommers7/ja-dancik-electric',
    image: jadImagePng,
    imageWebp: jadImageWebp,
    alt: 'J.A. Dancik Electric interface',
    showOnHomePage: false,
    openSource: true,
  },
];
