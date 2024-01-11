import React from 'react';

import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import App from '@homework-task/App';

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 2 } },
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
