import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { visit } from "unist-util-visit";

import Pre from "../components/pre";
import Preview from "../components/Preview";
import {
  ScrollbarCustomDemo,
  ScrollbarHiddenDemo,
} from "@/app/components/BlogScrollbarExamples";
import { InteractiveContextMenu } from "@/components/ContextMenu";

const blogComponents = {
  pre: Pre,
  Preview,
  ScrollbarCustomDemo,
  ScrollbarHiddenDemo,
  InteractiveContextMenu,
};

type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
};

async function parseBlogMdx(rawMdx: string) {
  return await compileMDX<BlogMdxFrontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components: blogComponents,
  });
}

function getBlogFolder() {
  return path.join(process.cwd(), "contents/blogs");
}

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 225;
  const cleanText = text.replace(/^---[\s\S]*?---/, "");
  const words = cleanText.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export async function getAllBlogStaticPaths() {
  try {
    const files = await fs.readdir(getBlogFolder());
    return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getAllBlogs() {
  const files = await fs.readdir(getBlogFolder());

  return await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filepath = path.join(getBlogFolder(), file);
        const rawMdx = await fs.readFile(filepath, "utf-8");
        const parsed = await parseBlogMdx(rawMdx);
        return {
          ...parsed,
          slug: file.replace(/\.mdx$/, ""),
          readingTime: calculateReadingTime(rawMdx),
        };
      })
  );
}

export async function getBlogForSlug(slug: string) {
  try {
    const filepath = path.join(getBlogFolder(), `${slug}.mdx`);
    const rawMdx = await fs.readFile(filepath, "utf-8");
    const parsed = await parseBlogMdx(rawMdx);
    return {
      ...parsed,
      slug,
      readingTime: calculateReadingTime(rawMdx),
    };
  } catch {
    return null;
  }
}

const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties.raw = node.raw;
    }
  });
};
