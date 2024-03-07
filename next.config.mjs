import withPurgeCss from '@fullhuman/postcss-purgecss';

const nextConfig = {
  images: {
    domains: ['placehold.co'],
  },
};

export default withPurgeCss(nextConfig);
