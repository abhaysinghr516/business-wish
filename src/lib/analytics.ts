// Analytics and tracking utilities

declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: any) => void;
    }
}

// Track page views
export function trackPageView(url: string, title?: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-Y0FKJQ2T12', {
            page_title: title,
            page_location: url,
        });
    }
}

// Track component copy events
export function trackComponentCopy(componentName: string, componentType: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'component_copy', {
            event_category: 'engagement',
            event_label: componentName,
            custom_parameter_1: componentType,
        });
    }
}

// Track search events
export function trackSearch(searchTerm: string, resultsCount: number) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'search', {
            search_term: searchTerm,
            event_category: 'engagement',
            custom_parameter_1: resultsCount,
        });
    }
}

// Track documentation page views
export function trackDocumentationView(pagePath: string, componentName?: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
            event_category: 'documentation',
            event_label: pagePath,
            custom_parameter_1: componentName || 'general',
        });
    }
}

// Track external link clicks
export function trackExternalLink(url: string, linkText: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click', {
            event_category: 'external_link',
            event_label: url,
            custom_parameter_1: linkText,
        });
    }
}

// Track user engagement
export function trackEngagement(action: string, category: string, label?: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
        });
    }
}

// Performance tracking
export function trackPerformance(metric: string, value: number, unit: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
            name: metric,
            value: Math.round(value),
            event_category: 'performance',
            custom_parameter_1: unit,
        });
    }
}

// Error tracking
export function trackError(error: Error, context?: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
            description: error.message,
            fatal: false,
            custom_parameter_1: context || 'unknown',
        });
    }

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.error('Tracked error:', error, 'Context:', context);
    }
}