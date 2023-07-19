declare module 'react-dom/client' {
    export function createRoot(container: Element | null, options?: { hydrate?: boolean }): ReactRoot;
    // Add other declarations as needed for your specific use case.
  }