import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { page_routes } from "./routes-config";
import { visit } from "unist-util-visit";

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Stepper, StepperItem } from "@/components/ui/stepper";
import Pre from "../components/pre";
import Note from "../components/note";
import { BasicAccordion, BorderedAccordion } from "@/components/Accordion";
import { CustomAlert, DismissableAlert, FloatingAlert, SimpleAlert } from "@/components/Alert";
import { AvatarGroup, AvatarSizes, AvatarWithActiveBadge, AvatarWithImage, AvatarWithNotification } from "@/components/Avatar";
import { BadgeGroup } from "@/components/Badge";
import { BannerwithActions, BannerwithHeadingAndButton, BasicBanner } from "@/components/Banner";
import Preview from "../components/Preview";
import { BasicBlogList, HorizontalCardBlogList, MinimalCardBlogList, TimelineLayoutBlogList } from "@/components/BlogList";
import { BottomNavigation, BubbleNavigation, FabNavigation } from "@/components/BottomNavigation";
import { BasicBreadcrumb, DropdownBreadcrumb, BreadcrumbwithSeparators } from "@/components/Breadcrumbs";
import { ButtonGroup, ButtonGroups, ButtonSizes, FAB } from "@/components/Button";
import { CardStyleCTA, CTAwithForm, SimpleCTA } from "@/components/CTA";
import { ArticleCard, ForumCard, JobCard, PodcastCard, ProductCard, ProfileCard, PropertyCard } from "@/components/Card";
import { BasicDivider, CustomDividerwithIcon, GradientDivider, VerticalDivider } from "@/components/Divider";
import { SearchableDropdown, DropdownwithIcons, SimpleDropdown } from "@/components/Dropdown";
import { BasicFeatures } from "@/components/Features";
import { DetailedFooter, FooterwithCTA, FooterwithMultipleSections, FooterwithNewsletter, SimpleFooter } from "@/components/Footer";
import { BasicHeader, CenteredAlignedHeader, HeaderwithAnimation, HeaderwithSearch } from "@/components/Header";
import { CenterContentHeroSection } from "@/components/Hero";
import { Loaders } from "@/components/Loader";
import { BasicPagination, PaginationwithDots, PaginationwithIcons, PaginationwithInputField } from "@/components/Pagination";
import { BasicSettingsPage, SettingsPagewithTabs } from "@/components/Settings";
import { BasicSidebar, CollapseSidebar, SidebarwithIcons } from "@/components/Sidebar";
import { BasicSkeleton, SkeletonLoadingforImageCard, SkeletonLoadingforUserProfile, SkeletonwithLoadedContent } from "@/components/Skeleton";
import { BasicTabs, TabswithBox, TabswithPill, TabswithUnderline } from "@/components/Tabs";
import { FullWidthTestimonial, MinimalCardTestimonial, SliderTestimonial, TestimonialSectionwithGridlayout } from "@/components/Testimonials";
import { Informative404Section, Interactive404Section, Minimal404Section, Playful404Section } from "@/components/Error404";
import { DropdownSocialShare, FABSocialShare, ModalSocialShare } from "@/components/SocialShare";
import { DropzoneFileUpload, FileTypeValidatorFileUpload, FileUpload, ImagePreviewFileUpload, MultiFileUpload } from "@/components/FileUpload";
import { AnimatedTooltip, ArrowTooltip, BasicTooltip, TooltipDemo } from "@/components/Tooltip";
import { CustomCalendarPicker, DropdownDatePicker, RangeDatePicker, SimpleDatePicker } from "@/components/DatePicker";
import PopoverDemo from "@/components/Popover";

// add custom components
const components = {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    pre: Pre,
    Note,
    Stepper,
    StepperItem,
    Preview,
    Minimal404Section,
    Playful404Section,
    Informative404Section,
    Interactive404Section,
    BasicAccordion,
    BorderedAccordion,
    SimpleAlert,
    DismissableAlert,
    CustomAlert,
    FloatingAlert,
    AvatarSizes,
    AvatarWithImage,
    AvatarWithNotification,
    AvatarWithActiveBadge,
    AvatarGroup,
    BadgeGroup,
    BasicBanner,
    BannerwithActions,
    BannerwithHeadingAndButton,
    BasicBlogList,
    MinimalCardBlogList,
    HorizontalCardBlogList,
    TimelineLayoutBlogList,
    BottomNavigation,
    BubbleNavigation,
    FabNavigation,
    BasicBreadcrumb,
    DropdownBreadcrumb,
    BreadcrumbwithSeparators,
    ButtonSizes,
    ButtonGroup,
    ButtonGroups,
    FAB,
    SimpleCTA,
    CardStyleCTA,
    CTAwithForm,
    JobCard,
    ProductCard,
    ProfileCard,
    PropertyCard,
    ArticleCard,
    ForumCard,
    PodcastCard,
    SimpleDatePicker,
    CustomCalendarPicker,
    DropdownDatePicker,
    RangeDatePicker,
    BasicDivider,
    VerticalDivider,
    CustomDividerwithIcon,
    GradientDivider,
    SimpleDropdown,
    DropdownwithIcons,
    SearchableDropdown,
    BasicFeatures,
    FileUpload,
    MultiFileUpload,
    ImagePreviewFileUpload,
    FileTypeValidatorFileUpload,
    DropzoneFileUpload,
    SimpleFooter,
    FooterwithMultipleSections,
    FooterwithNewsletter,
    FooterwithCTA,
    DetailedFooter,
    BasicHeader,
    HeaderwithSearch,
    HeaderwithAnimation,
    CenteredAlignedHeader,
    CenterContentHeroSection,
    Loaders,
    BasicPagination,
    PaginationwithIcons,
    PaginationwithInputField,
    PaginationwithDots,
    BasicSettingsPage,
    SettingsPagewithTabs,
    BasicSidebar,
    SidebarwithIcons,
    CollapseSidebar,
    BasicSkeleton,
    SkeletonLoadingforImageCard,
    SkeletonLoadingforUserProfile,
    SkeletonwithLoadedContent,
    FABSocialShare,
    DropdownSocialShare,
    ModalSocialShare,
    BasicTabs,
    TabswithUnderline,
    TabswithPill,
    TabswithBox,
    MinimalCardTestimonial,
    TestimonialSectionwithGridlayout,
    FullWidthTestimonial,
    SliderTestimonial,
    BasicTooltip,
    PopoverDemo,
    ArrowTooltip,
    AnimatedTooltip,
    TooltipDemo,
};

// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
    return await compileMDX<Frontmatter>({
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
        components,
    });
}

// logic for docs

type BaseMdxFrontmatter = {
    title: string;
    description: string;
};

export async function getDocsForSlug(slug: string) {
    try {
        const contentPath = getDocsContentPath(slug);
        const rawMdx = await fs.readFile(contentPath, "utf-8");
        return await parseMdx<BaseMdxFrontmatter>(rawMdx);
    } catch (err) {
        console.log(err);
    }
}

export async function getDocsTocs(slug: string) {
    const contentPath = getDocsContentPath(slug);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    // captures between ## - #### can modify accordingly
    const headingsRegex = /^(#{2,4})\s(.+)$/gm;
    let match;
    const extractedHeadings = [];
    while ((match = headingsRegex.exec(rawMdx)) !== null) {
        const headingLevel = match[1].length;
        const headingText = match[2].trim();
        const slug = sluggify(headingText);
        extractedHeadings.push({
            level: headingLevel,
            text: headingText,
            href: `#${slug}`,
        });
    }
    return extractedHeadings;
}

export function getPreviousNext(path: string) {
    const index = page_routes.findIndex(({ href }) => href == `/${path}`);
    return {
        prev: page_routes[index - 1],
        next: page_routes[index + 1],
    };
}

function sluggify(text: string) {
    const slug = text.toLowerCase().replace(/\s+/g, "-");
    return slug.replace(/[^a-z0-9-]/g, "");
}

function getDocsContentPath(slug: string) {
    return path.join(process.cwd(), "/src/app/contents/docs/", `${slug}/index.mdx`);
}

// for copying the code
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
            node.properties["raw"] = node.raw;
            // console.log(node);
        }
    });
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

export async function getAllBlogStaticPaths() {
    try {
        const blogFolder = path.join(process.cwd(), "/contents/blogs/");
        const res = await fs.readdir(blogFolder);
        return res.map((file) => file.split(".")[0]);
    } catch (err) {
        console.log(err);
    }
}

export async function getAllBlogs() {
    const blogFolder = path.join(process.cwd(), "/contents/blogs/");
    const files = await fs.readdir(blogFolder);
    return await Promise.all(
        files.map(async (file) => {
            const filepath = path.join(process.cwd(), `/contents/blogs/${file}`);
            const rawMdx = await fs.readFile(filepath, "utf-8");
            return {
                ...(await parseMdx<BlogMdxFrontmatter>(rawMdx)),
                slug: file.split(".")[0],
            };
        })
    );
}

export async function getBlogForSlug(slug: string) {
    const blogs = await getAllBlogs();
    return blogs.find((it) => it.slug == slug);
}
