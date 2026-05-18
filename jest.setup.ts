import "@testing-library/jest-dom";

export class IntersectionObserver {
  root = null;
  rootMargin = "";
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
(window as any).IntersectionObserver = IntersectionObserver;
(global as any).IntersectionObserver = IntersectionObserver;
