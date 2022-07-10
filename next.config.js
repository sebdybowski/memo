/** @type {import('next').NextConfig} */
import remarkGfm from 'remark-gfm';
import nextMDX from '@next/mdx';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})