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
import { BasicAccordion, BorderedAccordion, GhostAccordion } from "@/components/Accordion";
import { CustomAlert, DismissableAlert, FloatingAlert, SimpleAlert, GhostAlert, OutlineAlert } from "@/components/Alert";
import { AvatarGroup, AvatarSizes, AvatarWithActiveBadge, AvatarWithImage, AvatarWithNotification, SquareAvatar, StatusRingAvatar } from "@/components/Avatar";
import { BadgeGroup } from "@/components/Badge";
import { BannerwithActions, BannerwithHeadingAndButton, BasicBanner, CookieBanner, FloatingTopBanner } from "@/components/Banner";
import Preview from "../components/Preview";
import { BasicBlogList, HorizontalCardBlogList, MinimalCardBlogList, TimelineLayoutBlogList, GridMagazineBlogList } from "@/components/BlogList";
import { BottomNavigation, BubbleNavigation, FabNavigation } from "@/components/BottomNavigation";
import { BasicBreadcrumb, DropdownBreadcrumb, BreadcrumbwithSeparators } from "@/components/Breadcrumbs";
import { ButtonGroup, ButtonGroups, ButtonSizes, FAB } from "@/components/Button";
import { CardStyleCTA, CTAwithForm, SimpleCTA } from "@/components/CTA";
import { ArticleCard, ForumCard, JobCard, PodcastCard, ProductCard, ProfileCard, PropertyCard } from "@/components/Card";
import { BasicDivider, CustomDividerwithIcon, GradientDivider, VerticalDivider } from "@/components/Divider";
import {
    SimpleDropdown,
    DropdownwithIcons,
    SearchableDropdown,
    GroupedDropdown,
} from "@/components/Dropdown";
import { BasicFeatures, MinimalFeatures, HoverFeatures } from "@/components/Features";
import { DetailedFooter, FooterwithCTA, FooterwithMultipleSections, FooterwithNewsletter, SimpleFooter, UltraMinimalFooter } from "@/components/Footer";
import { BasicHeader, CenteredAlignedHeader, HeaderwithAnimation, HeaderwithSearch, FloatingHeader, MinimalStickyHeader } from "@/components/Header";
import { CenterContentHeroSection, GradientHeroSection, MinimalTypographyHero, SideImageHeroSection } from "@/components/Hero";
import { Loaders } from "@/components/Loader";
import { BasicPagination, PaginationwithDots, PaginationwithIcons, PaginationwithInputField, MinimalPagination, RoundedGhostPagination } from "@/components/Pagination";
import { BasicSettingsPage, SettingsPagewithTabs } from "@/components/Settings";
import { BasicSidebar, CollapseSidebar, SidebarwithIcons, FloatingIslandSidebar, ExpandableNestedSidebar } from "@/components/Sidebar";
import { BasicSkeleton, SkeletonLoadingforImageCard, SkeletonLoadingforUserProfile, SkeletonwithLoadedContent, MinimalistTableSkeleton, DashboardWidgetSkeleton } from "@/components/Skeleton";
import { BasicTabs, TabswithBox, TabswithUnderline, VerticalMinimalTabs } from "@/components/Tabs";
import { FullWidthTestimonial, MinimalCardTestimonial, SliderTestimonial, TestimonialSectionwithGridlayout, MarqueeTestimonial, BentoGridTestimonial } from "@/components/Testimonials";
import { Informative404Section, Interactive404Section, Minimal404Section, Playful404Section, Grid404Section } from "@/components/Error404";
import { DropdownSocialShare, FABSocialShare, ModalSocialShare, InlineSocialShare, PillSocialShare } from "@/components/SocialShare";
import { AvatarUpload, DropzoneFileUpload, FileTypeValidatorFileUpload, FileUpload, ImagePreviewFileUpload, MinimalDropzoneFileUpload, MultiFileUpload } from "@/components/FileUpload";
import { AnimatedTooltip, ArrowTooltip, BasicTooltip, OffsetTooltip, TooltipDemo } from "@/components/Tooltip";
import { CustomCalendarPicker, DropdownDatePicker, RangeDatePicker, SimpleDatePicker } from "@/components/DatePicker";
import { BasicPopover, MenuPopover, NotificationPopover, RichProfilePopover, CommandPopover } from "@/components/Popover";
import { BasicDataTable, StripedDataTable, ModernDataTable } from "@/components/DataTable";
import { AnimatedProgress, BasicProgress, ProgressWithLabel, CircularProgress, SegmentsProgress, IndeterminateProgress } from "@/components/Progress";
import { TextRevealDemo, TextRevealCustomDemo } from "@/components/motion/TextReveal";
import { NumberTickerDemo, NumberTickerCountdownDemo } from "@/components/motion/NumberTicker";
import { CardSpotlightDemo } from "@/components/motion/CardSpotlight";
import { ShimmerButtonDemo } from "@/components/motion/ShimmerButton";
import { GradientTextDemo, GradientTextCustomDemo } from "@/components/motion/GradientText";
import { FadeInDemo, StaggerFadeInDemo } from "@/components/motion/FadeIn";
import { MorphingTextDemo, MorphingTextStandaloneDemo } from "@/components/motion/MorphingText";
import { MagneticDemo, MagneticStrongDemo } from "@/components/motion/MagneticElement";
import { TextShimmerDemo, TextShimmerCustomDemo } from "@/components/motion/TextShimmer";
import { WordRotateDemo, WordRotateStackedDemo } from "@/components/motion/WordRotate";
import { DockDemo } from "@/components/motion/Dock";
import { SplitTextDemo, SplitTextVariantsDemo } from "@/components/motion/SplitText";
import { BlurRevealDemo, BlurRevealGroupDemo } from "@/components/motion/BlurReveal";
import MotionPreview from "@/app/components/MotionPreview";

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
    Grid404Section,
    BasicAccordion,
    BorderedAccordion,
    GhostAccordion,
    SimpleAlert,
    DismissableAlert,
    CustomAlert,
    FloatingAlert,
    GhostAlert,
    OutlineAlert,
    AvatarSizes,
    AvatarWithImage,
    AvatarWithNotification,
    AvatarWithActiveBadge,
    AvatarGroup,
    SquareAvatar,
    StatusRingAvatar,
    BadgeGroup,
    BasicBanner,
    BannerwithActions,
    BannerwithHeadingAndButton,
    CookieBanner,
    FloatingTopBanner,
    BasicBlogList,
    MinimalCardBlogList,
    HorizontalCardBlogList,
    TimelineLayoutBlogList,
    GridMagazineBlogList,
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
    GroupedDropdown,
    BasicFeatures,
    MinimalFeatures,
    HoverFeatures,
    FileUpload,
    MultiFileUpload,
    ImagePreviewFileUpload,
    FileTypeValidatorFileUpload,
    DropzoneFileUpload,
    AvatarUpload,
    MinimalDropzoneFileUpload,
    SimpleFooter,
    FooterwithMultipleSections,
    FooterwithNewsletter,
    FooterwithCTA,
    DetailedFooter,
    UltraMinimalFooter,
    BasicHeader,
    HeaderwithSearch,
    HeaderwithAnimation,
    CenteredAlignedHeader,
    FloatingHeader,
    MinimalStickyHeader,
    CenterContentHeroSection,
    GradientHeroSection,
    MinimalTypographyHero,
    SideImageHeroSection,
    Loaders,
    BasicPagination,
    PaginationwithIcons,
    PaginationwithInputField,
    PaginationwithDots,
    MinimalPagination,
    RoundedGhostPagination,
    BasicSettingsPage,
    SettingsPagewithTabs,
    BasicPopover,
    MenuPopover,
    NotificationPopover,
    RichProfilePopover,
    CommandPopover,
    BasicSidebar,
    SidebarwithIcons,
    CollapseSidebar,
    FloatingIslandSidebar,
    ExpandableNestedSidebar,
    BasicSkeleton,
    SkeletonLoadingforImageCard,
    SkeletonLoadingforUserProfile,
    SkeletonwithLoadedContent,
    MinimalistTableSkeleton,
    DashboardWidgetSkeleton,
    FABSocialShare,
    DropdownSocialShare,
    ModalSocialShare,
    InlineSocialShare,
    PillSocialShare,
    BasicTabs,
    TabswithUnderline,
    TabswithBox,
    VerticalMinimalTabs,
    MinimalCardTestimonial,
    TestimonialSectionwithGridlayout,
    FullWidthTestimonial,
    SliderTestimonial,
    MarqueeTestimonial,
    BentoGridTestimonial,
    BasicTooltip,
    ArrowTooltip,
    AnimatedTooltip,
    TooltipDemo,
    OffsetTooltip,
    BasicDataTable,
    StripedDataTable,
    ModernDataTable,
    BasicProgress,
    AnimatedProgress,
    ProgressWithLabel,
    CircularProgress,
    IndeterminateProgress,
    SegmentsProgress,
    // Motion components
    MotionPreview,
    TextRevealDemo,
    TextRevealCustomDemo,
    NumberTickerDemo,
    NumberTickerCountdownDemo,
    CardSpotlightDemo,
    ShimmerButtonDemo,
    GradientTextDemo,
    GradientTextCustomDemo,
    FadeInDemo,
    StaggerFadeInDemo,
    // Advanced motion components
    MorphingTextDemo,
    MorphingTextStandaloneDemo,
    MagneticDemo,
    MagneticStrongDemo,
    TextShimmerDemo,
    TextShimmerCustomDemo,
    WordRotateDemo,
    WordRotateStackedDemo,
    DockDemo,
    SplitTextDemo,
    SplitTextVariantsDemo,
    BlurRevealDemo,
    BlurRevealGroupDemo
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
