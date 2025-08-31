// Performance optimization utilities

export function preloadRoute(href: string) {
    if (typeof window !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function preloadImage(src: string) {
    if (typeof window !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    }
}

export function lazyLoadImages() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    img.src = img.dataset.src || '';
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Web Vitals tracking
export function trackWebVitals() {
    if (typeof window !== 'undefined') {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(console.log);
            getFID(console.log);
            getFCP(console.log);
            getLCP(console.log);
            getTTFB(console.log);
        });
    }
}

// Critical CSS inlining helper
export function inlineCriticalCSS(css: string) {
    if (typeof document !== 'undefined') {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }
}