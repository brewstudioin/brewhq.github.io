import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'impact-analysis' | 'implementation-plans' | 'integrations' | 'variance' | 'product-managers' | 'engineering-managers' | 'developers' | 'about' | 'pricing';

interface RouterContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children?: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}