import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

console.log('sanity token', process.env.SANITY_TOKEN);
console.log('gatsby token', process.env.GATSBY_PAGE_SIZE);

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza in Cape Town',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'y4nv0j7i',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
