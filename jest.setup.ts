import "@testing-library/jest-dom";

export class IntersectionObserver {
  root = null;
  rootMargin = "";
  // biome-ignore lint/suspicious/noExplicitAny: jest shim, state is unused
  thresholds = [] as any[];

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return [];
  }

  unobserve() {
    return null;
  }
}
// biome-ignore lint/suspicious/noExplicitAny: jsdom polyfill assignment
(window as any).IntersectionObserver = IntersectionObserver;
// biome-ignore lint/suspicious/noExplicitAny: jsdom polyfill assignment
(global as any).IntersectionObserver = IntersectionObserver;
