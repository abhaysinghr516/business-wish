// Analytics and tracking utilities
// GA4 + Microsoft Clarity

import Clarity from '@microsoft/clarity';

// ─── Clarity Setup ──────────────────────────────────────────────
let clarityInitialized = false;

export function initClarity(projectId?: string) {
    if (typeof window === 'undefined' || clarityInitialized) return;
    const id = projectId || process.env.NEXT_PUBLIC_CLARITY_ID;
    if (!id) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[Analytics] No NEXT_PUBLIC_CLARITY_ID set — Clarity disabled');
        }
        return;
    }
    Clarity.init(id);
    clarityInitialized = true;
}

// Tag Clarity sessions with useful metadata
export function tagClaritySession(key: string, value: string) {
    if (!clarityInitialized) return;
    Clarity.setTag(key, value);
}

export function trackClarityEvent(eventName: string) {
    if (!clarityInitialized) return;
    Clarity.event(eventName);
}

export function identifyClarityUser(userId: string, friendlyName?: string) {
    if (!clarityInitialized) return;
    Clarity.identify(userId, undefined, undefined, friendlyName);
}

// ─── GA4 Helpers ────────────────────────────────────────────────
declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    }
}

function sendGA4Event(eventName: string, params: Record<string, unknown>) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
}

// ─── Page & Navigation ─────────────────────────────────────────
export function trackPageView(url: string, title?: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-Y0FKJQ2T12', {
            page_title: title,
            page_location: url,
        });
    }
    tagClaritySession('page_path', url);
}

// ─── Component Events ──────────────────────────────────────────
export function trackComponentCopy(componentName: string) {
    sendGA4Event('component_copy', {
        event_category: 'engagement',
        component_name: componentName,
    });
    trackClarityEvent('component_copy');
}

export function trackMotionComponentView(componentName: string) {
    sendGA4Event('motion_component_view', {
        event_category: 'documentation',
        component_name: componentName,
    });
    tagClaritySession('motion_component', componentName);
}

// ─── Tool Events ───────────────────────────────────────────────
export function trackToolUsed(toolName: string) {
    sendGA4Event('tool_used', {
        event_category: 'engagement',
        tool_name: toolName,
    });
    trackClarityEvent('tool_used');
    tagClaritySession('tool_name', toolName);
}

// ─── Search ────────────────────────────────────────────────────
export function trackSearch(searchTerm: string, resultsCount: number) {
    sendGA4Event('search', {
        search_term: searchTerm,
        event_category: 'engagement',
        results_count: resultsCount,
    });
}

// ─── External Links ────────────────────────────────────────────
export function trackExternalLink(url: string, linkText: string) {
    sendGA4Event('outbound_click', {
        event_category: 'external_link',
        link_url: url,
        link_text: linkText,
    });
    trackClarityEvent('outbound_click');
}

export function trackGitHubStar() {
    sendGA4Event('github_star_click', {
        event_category: 'engagement',
        event_label: 'navbar',
    });
    trackClarityEvent('github_star');
}

// ─── Newsletter & Downloads ────────────────────────────────────
export function trackNewsletterSignup(source: string) {
    sendGA4Event('newsletter_signup', {
        event_category: 'conversion',
        signup_source: source,
    });
    trackClarityEvent('newsletter_signup');
}

export function trackDownloadClick(fileName: string) {
    sendGA4Event('download_click', {
        event_category: 'engagement',
        file_name: fileName,
    });
    trackClarityEvent('download');
}

// ─── Documentation ─────────────────────────────────────────────
export function trackDocumentationView(pagePath: string, componentName?: string) {
    sendGA4Event('doc_view', {
        event_category: 'documentation',
        page_path: pagePath,
        component_name: componentName || 'general',
    });
}

// ─── General Engagement ────────────────────────────────────────
export function trackEngagement(action: string, category: string, label?: string) {
    sendGA4Event(action, {
        event_category: category,
        event_label: label,
    });
}

// ─── Performance ───────────────────────────────────────────────
export function trackPerformance(metric: string, value: number, unit: string) {
    sendGA4Event('timing_complete', {
        name: metric,
        value: Math.round(value),
        event_category: 'performance',
        unit,
    });
}

// ─── Error Tracking ────────────────────────────────────────────
export function trackError(error: Error, context?: string) {
    sendGA4Event('exception', {
        description: error.message,
        fatal: false,
        context: context || 'unknown',
    });

    if (process.env.NODE_ENV === 'development') {
        console.error('Tracked error:', error, 'Context:', context);
    }
}