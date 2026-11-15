import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    this.callback([{ isIntersecting: true, target: element }]);
  }

  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  document.body.style.overflow = '';
});
