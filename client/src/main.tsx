// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import TanstackQueryProvider from './lib/tanstack-query';
import { router } from './lib/router';
import { Toaster } from '@/components/ui/sonner';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <TanstackQueryProvider>
    <RouterProvider router={router} />
    <Toaster position="top-center" richColors />
  </TanstackQueryProvider>,
  // </StrictMode>,
);
