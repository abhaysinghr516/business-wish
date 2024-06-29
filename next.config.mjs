import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import { mdxExpression } from 'micromark-extension-mdx-expression';
import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions`` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        extensions: [
            mdxExpression({
                acorn: Parser.extend(acornJsx())
            })
        ],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
