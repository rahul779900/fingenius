import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// ✅ Correct Vite environment variable
const clerkPubKey = 'pk_test_ZW5kbGVzcy1lc2NhcmdvdC0xMC5jbGVyay5hY2NvdW50cy5kZXYk';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
